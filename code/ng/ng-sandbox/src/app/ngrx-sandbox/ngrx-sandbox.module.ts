import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponentComponent } from './counter-component/counter-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CounterComponentComponent],
  exports: [CounterComponentComponent]
})
export class NgrxSandboxModule {}
