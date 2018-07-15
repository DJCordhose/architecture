import { Component, Input, EventEmitter, Output } from '@angular/core';

import {NavigationService, Menues} from './navigation.service';

@Component({
  selector: 'app-master',
  template: `<app-title [titles]='titles'>
  <h1>{{title}}</h1>
</app-title>
<app-button (send)='send.emit()' title='Suchen'></app-button>

`
})
export class MasterComponent {
  private title = 'Master';
  @Input() titles;

  @Output() send = new EventEmitter();

  // private buttonSend() {

  //   this.send.emit();
  // }

}
