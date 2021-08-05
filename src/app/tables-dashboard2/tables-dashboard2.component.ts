import { Component, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragStart } from '@angular/cdk/drag-drop';

import { ForwardLookComponent } from './myobjects/forwardlook.component';
import { BackordersComponent } from './myobjects/backorders.component';
import { BillOfWorkManagementComponent } from './billofworkmanagement.component';
import { JobSequencingToolKitBuilderComponent } from './myobjects/jobsequencingtoolkitbuilder.component';
import { FomComponent } from './myobjects/fom.component';
import { CmxgSupportComponent } from './myobjects/cmxgsupport.component';
import { PartTrackingComponent } from './myobjects/parttracking.component';
import { CardService } from '../service/card.service';


export interface availableModules {
  modId: number;
  tableTitle: string;
  avgLoad : string;
  canBeAdded: boolean;
}
const AVAILABLE_MODULES: availableModules[] = [ 
  { modId: 1, tableTitle: 'Aircraft Requirements', avgLoad: 'Avg Load: 0.52', canBeAdded: false },
  { modId: 2, tableTitle: 'FOM', avgLoad: 'Avg Load: 0.25', canBeAdded: true},
  { modId: 3, tableTitle: 'Journal', avgLoad: 'Avg Load: 0.02', canBeAdded: false},
  { modId: 4, tableTitle: 'Completed Components', avgLoad: 'Avg Load: 0.66', canBeAdded: false},
];


@Component({
  selector: 'tables-dashboard2',
  templateUrl: './tables-dashboard2.component.html',
  styleUrls: ['./tables-dashboard2.component.css']
})



export class TablesDashboard2Component implements OnInit {

  constructor(private service: CardService) { }

  ngOnInit(): void {
    var table_ForwardLook = new ForwardLookComponent(this.service);
    // table_ForwardLook.ngOnInit();
    console.log("Here is table_ForwardLook:");
    console.log(table_ForwardLook);

    var table_Backorders = new BackordersComponent();
    console.log("Here is table_Backorders:");
    console.log(table_Backorders);

    var table_BillOfWorkManagement = new BillOfWorkManagementComponent(this.service);
    var table_JobSequencingToolKitBuilder = new JobSequencingToolKitBuilderComponent(this.service);
    //var table_FOM = new FomComponent();
    var table_CmxgSupport = new CmxgSupportComponent();
    var table_PartTracking = new PartTrackingComponent();


    this.firstColumn.push(table_ForwardLook);
    this.firstColumn.push(table_PartTracking);
    this.secondColumn.push(table_JobSequencingToolKitBuilder);
    this.secondColumn.push(table_Backorders);
    this.thirdColumn.push(table_BillOfWorkManagement);
    //this.thirdColumn.push(table_FOM);
    this.thirdColumn.push(table_CmxgSupport);
  }

  firstColumn = [];
  secondColumn = [];
  thirdColumn = [];
  deleteBox = [];

  listOfModules = AVAILABLE_MODULES;

  addTable(id: number) {
    let moduleIndex = this.listOfModules.findIndex((obj => obj.modId == id));
    this.listOfModules[moduleIndex].canBeAdded = false;
    let table_FOM = new FomComponent();
    this.firstColumn.unshift(table_FOM);
    console.log('table added. moduleIndex = '+ moduleIndex);
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log('Moved from ' + event.previousContainer.id + '' + event.previousIndex + ' to ' + event.container.id + '' + event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        console.log('Moved from ' + event.previousContainer.id + '' + event.previousIndex + ' to ' + event.container.id + '' + event.currentIndex);
      if (this.deleteBox.length !== 0) {        
        console.log('container.id: ' + event.container.id);
        event.container.data.forEach((x,index)=>{
          x.order=index;
          console.log('deleteBox index: '+ index);
          //if(x.tableTitle){ 
          if(x.tableTitle === 'FOM'){ 
            console.log('deleted table: ' + x.tableTitle);
            let moduleIndex = this.listOfModules.findIndex((obj => obj.tableTitle === x.tableTitle));
            this.listOfModules[moduleIndex].canBeAdded = true;
            console.log('can Be Added?: ' + this.listOfModules[moduleIndex].canBeAdded);
            this.deleteBox.splice(index, 1);
          }
        })
      }
    }
  }


  

}
