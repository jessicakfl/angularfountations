import { Component, OnInit } from '@angular/core';

export interface Fom {
  Fom: string;
  Qty: number;
}

const TABLE_DATA: Fom[] = [
  {Fom: 'Items Removed from AC:', Qty: 131},
  {Fom: 'Items Stored:', Qty: 131},
  {Fom: '(Red Dot) Items Stored:', Qty: 0},
  {Fom: 'Items Checked Out:', Qty: 0},
  {Fom: 'A Condition:', Qty: 0},
]

@Component({
  template: '',
})


export class FomComponent implements OnInit {

  displayedColumns: string[] = ['Fom', 'Qty'];
  dataSource = TABLE_DATA;
  tableTitle = 'FOM'
  tableFooter1 = 'FOM Search'

  constructor() { }

  ngOnInit(): void {  }
  
}
