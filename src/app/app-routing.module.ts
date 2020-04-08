import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockPresenterComponent } from './Components/stock-presenter/stock-presenter.component';
import { StockDetailsComponent } from './Components/stock-details/stock-details.component';


const routes: Routes = [
  {path:'', component: StockPresenterComponent, children:[
    {path:'stocks/:stockname', component: StockDetailsComponent}
  ]},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
