import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/app/app.component';
import { StockPresenterComponent } from './Components/stock-presenter/stock-presenter.component';
import { AgGridModule } from 'ag-grid-angular'
import { StocksService } from './services/stocks.service';
import { StockDetailsComponent } from './Components/stock-details/stock-details.component'; 
import { BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { DialogModule } from "primeng/dialog";
import { ChartModule } from "primeng/chart";
import { GridsterModule } from "angular-gridster2";
import { StockDashboardComponent } from './components/stock-dashboard/stock-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    StockPresenterComponent,
    StockDetailsComponent,
    StockDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    FormsModule,
    BrowserAnimationsModule,
    DialogModule,
    ChartModule,
    GridsterModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
