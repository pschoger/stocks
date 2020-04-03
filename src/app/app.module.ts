import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockPresenterComponent } from './stock-presenter/stock-presenter.component';
import { AgGridModule } from 'ag-grid-angular'
import { StocksService } from './services/stocks.service';

@NgModule({
  declarations: [
    AppComponent,
    StockPresenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
