import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BuypageComponent } from '../app/buypage/buypage.component';
import { SellpageComponent } from '../app/sellpage/sellpage.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { OrderpagebuyComponent } from './orderpagebuy/orderpagebuy.component';
import { OrderpagesellComponent } from './orderpagesell/orderpagesell.component';

import { InfopageComponent } from './infopage/infopage.component';

const routes: Routes = [
  {path: 'buy', component: BuypageComponent},
  {path: 'sell', component: SellpageComponent},
  {path: 'orders', component: OrderpageComponent, children: [
    {
      path: 'buyorders', component: OrderpagebuyComponent
    },
    {
      path: 'sellorders', component: OrderpagesellComponent
    }
  ]},
  {path: 'info', component: InfopageComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
