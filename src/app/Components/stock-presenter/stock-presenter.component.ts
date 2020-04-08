import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../services/stocks.service';
import { Router } from '@angular/router';
import { Stock } from '../../Model/Stock';
import { CellDoubleClickedEvent, Column } from 'ag-grid-community';

@Component({
  selector: 'stock-presenter',
  templateUrl: './stock-presenter.component.html',
  styleUrls: ['./stock-presenter.component.scss']
})
export class StockPresenterComponent implements OnInit {

  constructor(private service: StocksService, private router: Router) { 
    // this.service.getStocks().forEach(s => console.log(s.Price.get(this.year )))
    this.service.getStocks().forEach(s =>
      this.rowData.push({
        stockname: s.Name,
        description: s.Description,
        price: s.Price.get(this.year)
      })
    )
  }

  ngOnInit() {
  }

  columnDefs = [
    {headerName: 'Stockname', field: 'stockname' },
    {headerName: 'Description', field: 'description' }
    // ,{headerName: 'Price', field: 'price'}
  ];

  rowData = [];

  year : number = 2020

  rowdbClick(eventargs: CellDoubleClickedEvent)
  {

    // console.log(eventargs.data['stockname']);
    this.router.navigate(['/stocks', eventargs.data['stockname']])
  }
}
