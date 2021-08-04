import { AfterViewInit, Component, Injectable, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { CardService } from 'src/app/service/card.service';
export interface ImageObj {
  name: string;
  id: number;
  nx:Number;
  ny:Number;
}

@Component({
  template: '',
})

export class ForwardLookComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'nx', 'ny'];
  dataSource: ImageObj[] = [];
  tableTitle = 'Summary of Component Groups - Aircraft'
  constructor(private service: CardService) {
    service.getImageList().subscribe((data: ImageObj[]) => {
      this.dataSource = data.reverse();
    })
  }

  ngOnInit(): void {
  }
}
