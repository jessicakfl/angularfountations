import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { HelpComponent } from './help/help.component';
import { AppRoutingModule } from './app-routing.module';
import { TablesComponent } from './tables/tables.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { TablesDashboard2Component } from './tables/tables-dashboard/tables-dashboard.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagedirectionsComponent } from './tables/subtables/imagedirections/imagedirections.component';
import { ImagenotesComponent } from './tables/subtables/imagenotes/imagenotes.component';
import { TableofcardsComponent } from './tables/subtables/tableofcards/tableofcards.component';
import { SubtablesComponent } from './tables/subtables/subtables.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    TablesComponent,
    TablesDashboard2Component,
    ImagedirectionsComponent,
    ImagenotesComponent,
    TableofcardsComponent,
    SubtablesComponent,
  ],
  imports: [
    BrowserModule,
    TableModule,
    MenubarModule,
    TabMenuModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    DragDropModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
