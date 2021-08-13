import { Component, OnInit } from '@angular/core';

export interface Backorders {
  Backorders: string;
  Qty: number;
}

const BACKORDERS_DATA: Backorders[] = [
  {Backorders: 'Total Backorders:', Qty: 11},
  {Backorders: 'Qty Due Out', Qty: 8},
  {Backorders: 'Total Qty Not Due Out', Qty: 3},
]

@Component({
  template: '',
})


export class BackordersComponent implements OnInit {

  displayedColumns: string[] = ['Backorders', 'Qty'];
  dataSource = BACKORDERS_DATA;
  tableTitle = 'Backorders'
  tableFooter1 = 'Backorders'
  avgLoadTime = 0.22;

  constructor() { }

  ngOnInit(): void {  }
  
}
