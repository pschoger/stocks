import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { StocksService } from 'src/app/services/stock/stocks.service';
import { Stock } from 'src/app/Model/Stock';

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit{

  constructor(private servive: StocksService) { 
  }
  private stock: Stock;
  private data: { labels: number[]; datasets: { label: string; data: number[]; fill: boolean; borderColor: string; }[]; };
  
  ngOnInit() {

  }

  @Input()
  public set stockName(v){
    console.log(v)
    this.getStockDetails(v)
    this.updateChart();
  }

  getStockDetails(stockname: string)
  {
    this.stock = this.servive.getStockByName(stockname);
  }

  updateChart()
  {
    if (this.stock) {
      this.data = {
        labels: Array.from(this.stock.Price.keys()),
        datasets: [
            {
                label: 'Price',
                data: Array.from(this.stock.Price.values()),
                fill: false,
                borderColor: '#4bc0ff'
            }
        ]
      }
    }
  }
}
