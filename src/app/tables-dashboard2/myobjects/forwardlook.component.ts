import { AfterViewInit, Component, Injectable, OnInit } from '@angular/core';
import { CardService } from 'src/app/service/card.service';
import { Image } from 'src/app/model/image';
export interface ImageObj {
  fileimagepath: string;
  id: number;
  nx:number
}

@Component({
  template: '',
})

export class ForwardLookComponent implements OnInit {

  displayedColumns: string[] = ['id', 'photofilepath', 'nx'];
  dataSource: ImageObj[] = [];
  tableTitle = 'Summary of Component Groups - Aircraft'
  constructor(private service: CardService) {
    service.getImageList().subscribe((data: ImageObj[]) => {
      this.dataSource = data;
    })
  }

  ngOnInit(): void {
  }
}
