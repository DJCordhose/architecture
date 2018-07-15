import { Component, Input, EventEmitter, Output } from '@angular/core';

import {NavigationService, Menues} from './navigation.service';

@Component({
  selector: 'app-button',
  template: `<button (click)='send.emit()'>{{title}}</button>`
})
export class ButtonComponent {
  @Input() private title = '';

  @Input() private active = '';

  @Output() send = new EventEmitter();

  doClick() {
    this.send.emit();
  }

}
