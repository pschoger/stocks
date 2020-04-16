import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { StocksService } from 'src/app/services/stock/stocks.service';
import { Stock } from 'src/app/Model/Stock';
import { stringify } from 'querystring';

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit{

  constructor(private servive: StocksService) { 
  }
  private stock: Stock;
  private stockArray: Stock[];
  private data: { labels: number[]; datasets: { label: string; data: number[]; fill: boolean; borderColor: string; }[]; };
  
  ngOnInit() {

  }

  @Input()
  public set stockName(v){
    this.getStockDetails(v)
    this.updateChart();
  }

  getStockDetails(stockName: string | string[] )
  {
    if (stockName.includes(",")) {      
      stockName = (stockName as string).split(",")
    }
    if (typeof(stockName) === "string") {
      this.stock = this.servive.getStockByName(stockName) as Stock;      
    }
    else {
      this.stockArray = this.servive.getStockByName(stockName) as Stock[];
    }
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
    if (this.stockArray) {
      let datasets = []
      this.stockArray.forEach(s => {
        datasets.push(
          {
              label: s.Name,
              data: Array.from(s.Price.values()),
              fill: false,
              borderColor: "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"  
          }
        )
      });
      this.data ={
        labels: Array.from(this.stockArray[0].Price.keys()),
        datasets : datasets
      };
    }
  }
}
