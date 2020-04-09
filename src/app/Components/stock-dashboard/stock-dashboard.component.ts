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
  dashboard: Array<GridsterItem>;
  
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
      setGridSize: true
    };
    this.setItems();
  }

  setItems()
  {
    this.dashboard = []
    this.service.getTopStocks(2022).forEach(stock => {
      this.dashboard.push({cols: 2, rows: 1.2, y: 0, x: 0, name: stock.Name})
    });
  }
}
