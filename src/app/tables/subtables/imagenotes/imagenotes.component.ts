import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Imagenote } from 'src/app/model/imagenote';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from 'src/app/service/card.service';
import { Image } from 'src/app/model/image';
const enum Status {
  OFF = 0,
  RESIZE = 1,
  MOVE = 2
}

@Component({
  selector: 'app-imagenotes',
  templateUrl: './imagenotes.component.html',
  styleUrls: ['./imagenotes.component.scss']
})

export class ImagenotesComponent implements OnInit, AfterViewInit {
  cardtitle = "";
  constructor(private _Activedroute: ActivatedRoute,
    private _router: Router,
    private cardService: CardService) {
  }

  @Input('widthNote') public width: number;
  @Input('heightNote') public height: number;
  @Input('leftNote') public left: number;
  @Input('topNote') public top: number;
  @ViewChild("box") public box: ElementRef;
  @Input('ifnotepaging') public ifnotepaging: boolean;
  private boxPosition: { left: number, top: number };
  private containerPos: { left: number, top: number, right: number, bottom: number };
  public mouse: { x: number, y: number }
  public status: Status = Status.OFF;
  private mouseClick: { x: number, y: number, left: number, top: number }
  ImageNoteList: any = [];
  msg: string = "";
  sub: any;
  id: any;
  imagenote: Imagenote;
  image: Image;

  ngOnInit(): void {
    this.cardtitle = "Image Notes";
    this.refreshImageNoteList();
  }

  refreshImageNoteList() {
    this.sub = this._Activedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.cardService.getImageNotesByImageId(this.id).subscribe((data: any) => {
        this.ImageNoteList = data;
      });
    })
  }

  ngAfterViewInit() {
    this.loadBox();
    this.loadContainer();
  }

  private loadBox() {
    const { left, top } = this.box.nativeElement.getBoundingClientRect();
    this.boxPosition = { left, top };
  }

  private loadContainer() {
    const left = this.boxPosition.left - this.left;
    const top = this.boxPosition.top - this.top;
    const right = left + 1000;
    const bottom = top + 600;
    this.containerPos = { left, top, right, bottom };
  }

  setStatus(event: MouseEvent, status: number) {
    if (status === 1) event.stopPropagation();
    else if (status === 2) this.mouseClick = { x: event.clientX, y: event.clientY, left: this.left, top: this.top };
    else this.loadBox();
    this.status = status;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse = { x: event.clientX, y: event.clientY };

    if (this.status === Status.RESIZE) this.resize();
    else if (this.status === Status.MOVE) this.move();
  }

  private resize() {
    //if(this.resizeCondMeet()){
    this.width = Number(this.mouse.x > this.boxPosition.left) ? this.mouse.x - this.boxPosition.left : 0;
    this.height = Number(this.mouse.y > this.boxPosition.top) ? this.mouse.y - this.boxPosition.top : 0;
    var val = { id: 4, nw: this.width.toFixed(), nh: this.height.toFixed(), nt: this.top, nl: this.left, ifpaging: this.ifnotepaging };
    this.cardService.setConfigSettings(val).subscribe(res => {
      this.msg = res.toString();
    });
    //}
  }

  private resizeCondMeet() {
    return (this.mouse.x < this.containerPos.right && this.mouse.y < this.containerPos.bottom);
  }

  private move() {
    //if(this.moveCondMeet()){
    this.left = this.mouseClick.left + (this.mouse.x - this.mouseClick.x);
    this.top = this.mouseClick.top + (this.mouse.y - this.mouseClick.y);
    var val = { id: 4, nw: this.width.toFixed(), nh: this.height.toFixed(), nt: this.top, nl: this.left, ifpaging: this.ifnotepaging };
    this.cardService.setConfigSettings(val).subscribe(res => {
      this.msg = res.toString();
    });
    ///}
  }

  private moveCondMeet() {
    const offsetLeft = this.mouseClick.x - this.boxPosition.left;
    const offsetRight = this.width - offsetLeft;
    const offsetTop = this.mouseClick.y - this.boxPosition.top;
    const offsetBottom = this.height - offsetTop;
    return (
      this.mouse.x > this.containerPos.left + offsetLeft &&
      this.mouse.x < this.containerPos.right - offsetRight &&
      this.mouse.y > this.containerPos.top + offsetTop &&
      this.mouse.y < this.containerPos.bottom - offsetBottom
    );
  }

}
