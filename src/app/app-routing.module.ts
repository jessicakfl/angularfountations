import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { TablesComponent } from './tables/tables.component';
import { SiteadminComponent } from './siteadmin/siteadmin.component';
import { SubtablesComponent } from './tables/subtables/subtables.component';

import { TablesDashboard2Component } from './tables/tables-dashboard/tables-dashboard.component';
import { ImagedirectionsComponent } from './tables/subtables/imagedirections/imagedirections.component';
import { ImagenotesComponent } from './tables/subtables/imagenotes/imagenotes.component';
const routes: Routes = [
  {path:'help', component: HelpComponent},
  {path:'table', component:TablesComponent},
  {path:'siteadmin', component:SiteadminComponent},
  {path:'table/subtables/:id', component:SubtablesComponent},
  {path:'imagedirections', component:ImagedirectionsComponent},
  {path:'imagenotes', component:ImagenotesComponent},
  {path:'', component:TablesComponent},
  {path: 'table/tables-dashboard', component: TablesDashboard2Component},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
