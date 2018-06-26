import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MyDashboardComponent} from './my-dashboard/my-dashboard.component';

const routes: Routes = [
  {
    path: 'material',
    component: MyDashboardComponent
  },
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
