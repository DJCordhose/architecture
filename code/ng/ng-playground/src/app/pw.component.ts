import { Component, Input, EventEmitter, Output } from '@angular/core';

import {NavigationService, Menues} from './navigation.service';

@Component({
  selector: 'app-pw',
  template: `<input type='password' [(ngModel)]='password1'>
  <input type='password' [(ngModel)]='password2' (input)='onPw2Change()'>
  <p style='color:red'>{{compare}}</p>`
})
export class PwComponent {
  @Input() compare: string;
  @Input() password2: string;
  @Input() password1: string;
  @Output() passwordEmiter = new  EventEmitter();

  onPw2Change() {
    if(this.password1!=this.password2) {
      this.compare = 'Password do not match';
    } else {
      this.compare = '';
      this.passwordEmiter.emit({'password':this.password2});
    }
  }

}
