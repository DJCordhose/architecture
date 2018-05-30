import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';

@NgModule({
  imports: [CommonModule, StoreModule.forRoot({ count: counterReducer })],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class NgrxSandboxModule {}
