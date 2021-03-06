import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/model/group';
import { CardService } from 'src/app/service/card.service';
export interface GroupObj {
  JobSequencingToolKitBuilder: string;
}

// const TABLE_DATA: JobSequencingToolKitBuilder[] = [
//   {JobSequencingToolKitBuilder: 'JST Kit Builder - Material to Kit'},
//   {JobSequencingToolKitBuilder: 'JST Kit Builder - All Material'},
// ]

@Component({
  template: '',
})


export class JobSequencingToolKitBuilderComponent implements OnInit {

  displayedColumns: string[] = ['name', 'complete', 'late', 'ontime', 'latep'];
  dataSource: Group[] = [];
  tableTitle = 'Compeleted Components'
  avgLoadTime = 0.66;
  constructor(private service: CardService) {
    this.dataSource = this.service.getGroups();
  }

  ngOnInit(): void {  }
  
}
