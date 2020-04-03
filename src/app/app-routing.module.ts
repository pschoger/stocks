import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockPresenterComponent } from './stock-presenter/stock-presenter.component';


const routes: Routes = [
  {path:'', component: StockPresenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
