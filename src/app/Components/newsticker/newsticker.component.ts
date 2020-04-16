import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Stock } from 'src/app/Model/Stock';
import { StocksService } from 'src/app/services/stock/stocks.service';

@Component({
  selector: 'newsticker',
  templateUrl: './newsticker.component.html',
  styleUrls: ['./newsticker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewstickerComponent implements OnInit {

  constructor(private service: StocksService) {
    
  }

  stocks: Stock[]
  ngOnInit() {
    this.stocks = this.service.getStocks()
  }

  private year_1 = 2021
  private year_2 = 2022
}
