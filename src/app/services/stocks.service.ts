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
        new Map<Date, number>()
          .set(new Date('2019'), 5)
          .set(new Date('2020'), 15)
          .set(new Date('2021'), -7)),
      new Stock("Stock_2", "The second one",
        new Map<Date, number>()
        .set(new Date('2019'), 7)
        .set(new Date('2020'), 20)
        .set(new Date('2021'), 10)),
      new Stock("Stock_3", "Third stock",
        new Map<Date, number>()
        .set(new Date('2019'), 18)
        .set(new Date('2020'), 5)
        .set(new Date('2021'), 2))
    ]
  }
}
