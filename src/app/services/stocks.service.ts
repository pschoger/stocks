import { Injectable } from '@angular/core';
import { Stock } from '../Model/Stock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor() { }
  getStocks(): Stock[]
  {
    return[
      new Stock("Stock_1", "This is the first stock", 
        new Map<number, number>()
          .set(2019, 5)
          .set(2020, 15)
          .set(2021, -7)),
      new Stock("Stock_2", "The second one",
        new Map<number, number>()
        .set(2019, 7)
        .set(2020, 20)
        .set(2021, 10)),
      new Stock("Stock_3", "Third stock",
        new Map<number, number>()
        .set(2019, 18)
        .set(2020, 5)
        .set(2021, 2))
    ]
  }

  getStockByName(stockName: string)
  {
    return this.getStocks().find(s => s.Name == stockName)
  }
}
