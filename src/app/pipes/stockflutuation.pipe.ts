import { Pipe, PipeTransform } from '@angular/core';
import { Stock } from '../Model/Stock';
import { StocksService } from '../services/stock/stocks.service';

@Pipe({
  name: 'stockflutuation',
  pure: true
})
export class StockflutuationPipe implements PipeTransform {

  constructor(private service:StocksService) {}
  transform(value: string, year_1: number, year_2:number) :number {
    return this.getFluctuation(value, year_1, year_2);
  }

  getFluctuation(name:string, year_1:number, year_2:number)
  {
    let stock : Stock = this.service.getStockByName(name) as Stock
    // without -0 the numbers would not be recognized as numbers
    return stock.Price.get(year_2-0) - stock.Price.get(year_1-0)
  }

}
