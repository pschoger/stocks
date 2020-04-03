import { Component, OnInit } from '@angular/core';
import { StocksService } from '../services/stocks.service';

@Component({
  selector: 'stock-presenter',
  templateUrl: './stock-presenter.component.html',
  styleUrls: ['./stock-presenter.component.scss']
})
export class StockPresenterComponent implements OnInit {

  constructor(private service: StocksService) { 
    console.log(this.service.getStocks())
  }

  ngOnInit() {
  }

  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];


}
