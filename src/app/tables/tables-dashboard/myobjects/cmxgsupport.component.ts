import { Component, OnInit } from '@angular/core';

export interface CmxgSupport {
  CmxgSupport: string;
  Qty: number;
}

const TABLE_DATA: CmxgSupport[] = [
  {CmxgSupport: 'On-Time:', Qty: 0},
  {CmxgSupport: 'Late:', Qty: 0},
  {CmxgSupport: 'No EDD:', Qty: 0},
]

@Component({
  template: '',
})


export class CmxgSupportComponent implements OnInit {

  displayedColumns: string[] = ['CmxgSupport', 'Qty'];
  dataSource = TABLE_DATA;
  tableTitle = 'CMXG Support'
  tableFooter1 = 'Completed'
  tableFooter2 = 'Awaiting CMXG Receipt'
  avgLoadTime = 0.15;

  constructor() { }

  ngOnInit(): void {  }
  
}
