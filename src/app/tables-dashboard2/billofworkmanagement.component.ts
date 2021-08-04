import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';
import { CardService } from 'src/app/service/card.service';
// export interface BillOfWorkManagement {
//   BillOfWorkManagement: string;
// }

// const TABLE_DATA: BillOfWorkManagement[] = [
//   {BillOfWorkManagement: 'Production Control Board (ePCB)'},
//   {BillOfWorkManagement: 'BOW Worm Chart'},
//   {BillOfWorkManagement: 'Tactical Schedule'},
//   {BillOfWorkManagement: 'Full Schedule'},
//   {BillOfWorkManagement: 'Materiel Schedule'},
//   {BillOfWorkManagement: 'Group Information'},
//   {BillOfWorkManagement: 'Mechanic Assignment'},
//   {BillOfWorkManagement: 'Late Finished Hours Chart'}
// ]

@Component({
  template: '',
})


export class BillOfWorkManagementComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  dataSource: Card[] = [];
  tableTitle = 'Search Avg'

  constructor(private service: CardService) {
    this.dataSource = this.service.getCards();
  }

  ngOnInit(): void {  }
  
}
