import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Imagedirection } from 'src/app/model/imagedirection';
import { Imagenote } from 'src/app/model/imagenote';
import { CardService } from 'src/app/service/card.service';
import { ActivatedRoute, Router } from '@angular/router';
const enum Status {
  OFF = 0,
  RESIZE = 1,
  MOVE = 2
}
@Component({
  selector: 'app-imagedirections',
  templateUrl: './imagedirections.component.html',
  styleUrls: ['./imagedirections.component.scss']
})
export class ImagedirectionsComponent implements OnInit {
  cardtitle = "";

  constructor(private _Activedroute: ActivatedRoute,
    private _router: Router, private cardService: CardService) { }

  @Input('widthDirection') public width: number;
  @Input('heightDirection') public height: number;
  @Input('leftDirection') public left: number;
  @Input('topDirection') public top: number
  @Input('ifdiretionpaging') public ifdiretionpaging: boolean;;
  @ViewChild("box") public box: ElementRef;
  private boxPosition: { left: number, top: number };
  private containerPos: { left: number, top: number, right: number, bottom: number };
  public mouse: { x: number, y: number }
  public status: Status = Status.OFF;
  private mouseClick: { x: number, y: number, left: number, top: number }
  ImageDirectionList: Imagedirection = [];
  msg: string = "";
  sub: any;
  id: any;
  ngOnInit(): void {
    this.cardtitle = "Image Directions";
    this.refreshImageDirectionsList();
    // this.cardService.getIfImagePaging(5).subscribe((data: boolean) => {
    //   this.ifdiretionpaging = data;
    // })
  }

  // this.sub = this._Activedroute.paramMap.subscribe(params => {
  //   this.id = params.get('id');
  //   console.log("##"+this.id);
  //   this.cardService.getImageNotesByImageId(this.id).subscribe((data: any) => {
  //     this.ImageNoteList = data;
  //     // this.imagenote = this.ImageNoteList.find(x => x.id == this.id);
  //   });
  // })
  refreshImageDirectionsList() {
    this.sub = this._Activedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.cardService.getImageDirectionssByImageId(this.id).subscribe(data => {
        this.ImageDirectionList = data;
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
    var val = { id: 5, nw: this.width.toFixed(), nh: this.height.toFixed(), nt: this.top, nl: this.left, ifpaging: this.ifdiretionpaging };
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
    var val = { id: 5, nw: this.width.toFixed(), nh: this.height.toFixed(), nt: this.top, nl: this.left, ifpaging: this.ifdiretionpaging };
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
