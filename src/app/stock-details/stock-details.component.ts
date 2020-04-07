import { Component, OnInit, OnDestroy } from '@angular/core';
import { StocksService } from '../services/stocks.service';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Stock } from '../Model/Stock';
import { Subscription } from 'rxjs';

@Component({
  selector: 'stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss']
})
export class StockDetailsComponent implements OnInit , OnDestroy{
  data: { labels: number[]; datasets: { label: string; data: number[]; fill: boolean; borderColor: string; }[]; };


  constructor(private servive: StocksService, private router: Router, private route: ActivatedRoute) { 
    this.stock = route.paramMap["stockname"]
    this.subcription = route.paramMap.subscribe(
      params => {
        this.getStockDetails(params.get('stockname'))
        this.updateChart();
      }
    );
  }

  ngOnInit() {
  }

  private subcription : Subscription;
  private display: boolean = true;
  private stock: Stock;
  
  public get Display() : boolean {
    return this.display;
  }
  public set Display(value: boolean) {
    this.display = value;
  }
  
  public get Name() : string {return this.stock.Name}
  public get Description() : string {return this.stock.Description}


  getStockDetails(stockname: string)
  {
    this.stock = this.servive.getStockByName(stockname);
  }

  updateChart()
  {
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

  NavigateBack(){
    this.router.navigate([''])
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
