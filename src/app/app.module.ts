import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockPresenterComponent } from './stock-presenter/stock-presenter.component';
import { AgGridModule } from 'ag-grid-angular'
import { StocksService } from './services/stocks.service';
import { StockDetailsComponent } from './stock-details/stock-details.component'; 
import { BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import { PanelModule } from "primeng/panel";
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from "primeng/dialog";
import { ChartModule } from "primeng/chart";


@NgModule({
  declarations: [
    AppComponent,
    StockPresenterComponent,
    StockDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    FormsModule,
    BrowserAnimationsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    DialogModule,
    ChartModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
