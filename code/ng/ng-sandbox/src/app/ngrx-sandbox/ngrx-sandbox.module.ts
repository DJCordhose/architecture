import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment'; // Angular CLI environemnt
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ count: counterReducer }),
  // Instrumentation must be imported after importing StoreModule (config is optional)
  StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    logOnly: environment.production, // Restrict extension to log-only mode
  })],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class NgrxSandboxModule {}
