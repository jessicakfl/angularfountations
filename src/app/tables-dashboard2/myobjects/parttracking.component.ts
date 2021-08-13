import { Component, OnInit } from '@angular/core';

export interface PartTracking {
  PartTracking: string;
  Qty: number;
}

const TABLE_DATA: PartTracking[] = [
  {PartTracking: 'Being Moved', Qty: 8},
  {PartTracking: 'Cancelled by FLS', Qty: 58},
  {PartTracking: 'In Research', Qty: 2},
  {PartTracking: 'Cancelled', Qty: 1},
  {PartTracking: 'Backorder', Qty: 4},
  {PartTracking: 'CD', Qty: 2},
  {PartTracking: 'Sending Order', Qty: 1},
  {PartTracking: 'Complete', Qty: 374},
  {PartTracking: 'Approved', Qty: 1},
  {PartTracking: 'Total', Qty: 451},
]

@Component({
  template: '',
})


export class PartTrackingComponent implements OnInit {

  displayedColumns: string[] = ['PartTracking', 'Qty'];
  dataSource = TABLE_DATA;
  tableTitle = 'Part Tracking'
  tableFooter3 = 'Total'
  avgLoadTime = 0.05;
  constructor() { }

  ngOnInit(): void {  }
  
}
