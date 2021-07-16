import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener, Output, EventEmitter } from '@angular/core';
import { Image } from 'src/app/model/image';
import { CardService } from 'src/app/service/card.service';
const enum Status {
  OFF = 0,
  RESIZE = 1,
  MOVE = 2
}
@Component({
  selector: 'app-tableofusers',
  templateUrl: './tableofusers.component.html',
  styleUrls: ['./tableofusers.component.scss']
})
export class TableofusersComponent implements OnInit {
  @ViewChild("box") public box: ElementRef;
  private boxPosition: { left: number, top: number };
  private containerPos: { left: number, top: number, right: number, bottom: number };
  public mouse: { x: number, y: number }
  public status: Status = Status.OFF;
  private mouseClick: { x: number, y: number, left: number, top: number }
  constructor(private cardService: CardService) { }
  ImageList: Image = [];
  @Input('width') public width: number;
  @Input('left') public left: number;
  @Input('top') public top: number;
  @Input('height') public height: number;
  ngOnInit(): void {
    this.refreshImageList();
  }
  refreshImageList() {
    this.cardService.getImageList().subscribe((data: any) => {
      this.ImageList = data;
    })
  }
  title ="Table of Users";
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

    // if (this.status === Status.RESIZE) this.resize();
    // else if (this.status === Status.MOVE) this.move();
  }

  // private resize() {
  //   //if(this.resizeCondMeet()){
  //   this.width = Number(this.mouse.x > this.boxPosition.left) ? this.mouse.x - this.boxPosition.left : 0;
  //   this.height = Number(this.mouse.y > this.boxPosition.top) ? this.mouse.y - this.boxPosition.top : 0;
  //   if (this.width && this.height) {
  //     var val = { id: 3, nw: this.width.toFixed(), nh: this.height.toFixed(), nt: this.top, nl: this.left, ifpaging: this.ifimagepaging };
  //     this.cardService.setConfigSettings(val).subscribe(res => {
  //       this.msg = res.toString();
  //     });
  //   }
    // }
  // }

  private resizeCondMeet() {
    return (this.mouse.x < this.containerPos.right && this.mouse.y < this.containerPos.bottom);
  }

  // private move() {
  //   //if(this.moveCondMeet()){
  //   this.left = this.mouseClick.left + (this.mouse.x - this.mouseClick.x);
  //   this.top = this.mouseClick.top + (this.mouse.y - this.mouseClick.y);
  //   if (this.width && this.height) {
  //     var val = { id: 3, nw: this.width.toFixed(), nh: this.height.toFixed(), nt: this.top, nl: this.left, ifpaging: this.ifimagepaging };
  //     this.cardService.setConfigSettings(val).subscribe(res => {
  //       this.msg = res.toString();
  //     });
  //   }
  //   // }
  // }

  // private moveCondMeet() {
  //   const offsetLeft = this.mouseClick.x - this.boxPosition.left;
  //   const offsetRight = this.width - offsetLeft;
  //   const offsetTop = this.mouseClick.y - this.boxPosition.top;
  //   const offsetBottom = this.height - offsetTop;
  //   return (
  //     this.mouse.x > this.containerPos.left + offsetLeft &&
  //     this.mouse.x < this.containerPos.right - offsetRight &&
  //     this.mouse.y > this.containerPos.top + offsetTop &&
  //     this.mouse.y < this.containerPos.bottom - offsetBottom
  //   );
  // }
}
