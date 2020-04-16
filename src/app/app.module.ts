import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/app/app.component';
import { StockPresenterComponent } from './Components/stock-presenter/stock-presenter.component';
import { AgGridModule } from 'ag-grid-angular'
import { StocksService } from './services/stock/stocks.service';
import { StockDetailsComponent } from './Components/stock-details/stock-details.component'; 
import { BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { CarouselModule } from "primeng/carousel"
import { CardModule } from "primeng/card"

import { DialogModule } from "primeng/dialog";
import { ChartModule } from "primeng/chart";
import { GridsterModule } from "angular-gridster2";
import { StockDashboardComponent } from './components/stock-dashboard/stock-dashboard.component';
import { GraphComponent } from './components/graph/graph.component';
import { StockFluctuationComponent } from './components/stock-fluctuation/stock-fluctuation.component';
import { StockflutuationPipe } from './pipes/stockflutuation.pipe';
import { NewstickerComponent } from './components/newsticker/newsticker.component';


@NgModule({
  declarations: [
    AppComponent,
    StockPresenterComponent,
    StockDetailsComponent,
    StockDashboardComponent,
    GraphComponent,
    StockFluctuationComponent,
    StockflutuationPipe,
    NewstickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    FormsModule,
    BrowserAnimationsModule,
    DialogModule,
    ChartModule,
    GridsterModule,
    CarouselModule,
    CardModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent],
})
export class AppModule { }
