import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {CustomerComponent} from './components/customer/customer.component';
import {ServerComponent } from './components/server/server.component';
import {KitchenComponent } from './components/kitchen/kitchen.component';
import {ManagerComponent } from './components/manager/manager.component';
import {MenuComponent} from './components/menu/menu.component';
import {MenuitemsComponent} from './components/menuitems/menuitems.component';

const routes: Routes = [
  {path: 'customer' , component:CustomerComponent},
  {path: 'server' , component:ServerComponent},
  {path: 'kitchen' , component:KitchenComponent},
  {path: 'manager' , component:ManagerComponent},
  {path: 'menu',component:MenuComponent},
  {path: 'menuitems/:id',component:MenuitemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
