import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './ngrx-sandbox/counter.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'counter/:count', component: CounterComponent },
  { path: 'root', component: AppComponent },
  { path: '', redirectTo: '/root', pathMatch: 'full' }
];
@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
