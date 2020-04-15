import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType, GridsterItemComponent } from "angular-gridster2";
import { AppComponent } from '../app/app.component';
import { StocksService } from 'src/app/services/stock/stocks.service';

@Component({
  selector: 'stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.scss']
})
export class StockDashboardComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem> = [];
  
  constructor(private service:StocksService) {
  }

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      disablePushOnDrag: true,
      draggable:{enabled:true},
      resizable:{enabled:true},
      gridType: GridType.VerticalFixed,
      setGridSize: true,
      defaultLayerIndex: 1
    };

    this.addTopStocks(2022,3);
    this.addFluctuation(2021,2022);
  }

  addTopStocks(year:number, number?: number) {
    let stockNames: string[] = []
    this.service.getTopStocks(year, number).forEach(stock => {
      stockNames.push(stock.Name);
    });
    this.dashboard.push({cols: 2, rows: 1.2, y: 0, x: 0, name: stockNames, type: 'graph'})
  }

  addFluctuation(year_1: number, year_2:number) {
    this.dashboard.push({cols:2, rows: 2, y: 0, x: 0, type: 'fluctuation', year_1: year_1, year_2: year_2})
  }
  
}
