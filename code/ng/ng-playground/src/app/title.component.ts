import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<div class='title'>
  <ng-content></ng-content>
  </div>`
})
export class TitleComponent {
}
