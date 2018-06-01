import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<div class='title'>
  <ng-content></ng-content>
  <span *ngFor='let title of titles'>{{title.name}}</span>

  </div>`
})
export class TitleComponent {
  @Input() titles;
}
