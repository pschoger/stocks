import { Component, OnInit, Input, PipeTransform, Pipe } from '@angular/core';
import { StocksService } from 'src/app/services/stock/stocks.service';
import { GridsterItem } from 'angular-gridster2';
import { Stock } from 'src/app/Model/Stock';

@Component({
  selector: 'stock-fluctuation',
  templateUrl: './stock-fluctuation.component.html',
  styleUrls: ['./stock-fluctuation.component.scss']
})
export class StockFluctuationComponent implements OnInit{

  constructor(private service: StocksService) { }

  private stocks : Stock[];
  
  private _year_1 : number;
  @Input()
  public set year_1(v : number) {
    this._year_1 = v;
  }
  public get year_1(){ return this._year_1}

  
  private _year_2 : number;
  @Input()
  public set year_2(v : number) {
    this._year_2 = v;
  }
  public get year_2(){ return this._year_2}
    
  ngOnInit() {
    this.stocks = this.service.getStocks();
  }
  
}
