import { Injectable } from '@angular/core';
import { Stock } from '../../Model/Stock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  private randomstocks : Stock[]
  constructor() { this.randomstocks = this.getRandomStocks()}
  getStocks(): Stock[]
  {
    if (this.random) {
      return this.randomstocks;
    }
    else{
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
  }

  getStockByName(stockName: string | string[]) : Stock | Stock[]
  {
    if (typeof(stockName) === "string") {
      return this.getStocks().find(s => s.Name === stockName)
    }
    else{
      return this.getStocks().filter(s => stockName.includes(s.Name))
    }
  }

  public random : boolean = true;

  private getRandomStocks(){
    let stocks : Stock[] = new Array<Stock>()

    
    let numberOfStocks = Math.round(Math.random() * 20 + 5);
    

    for (let i = 0; i < numberOfStocks; i++) {
    let map = new Map<number, number>()
    for (let i = 1995; i < 2023; i++) {
        map.set(i, Math.round(Math.random() * 40 - 20))
    }
    stocks.push(
      new Stock(
        'Stock_'+i, 
        Math.random().toString(36),
        map
        )
      )
    }
    
    return stocks;
  }

  public getTopStocks(year:number = 2020, number:number = 6): Stock[]
  {
    // first slice prevents sorting of original array
    return this.getStocks().slice(0, this.getStocks().length).sort((a,b)=> b.Price.get(year)-a.Price.get(year)).slice(0,number)
  }
}
