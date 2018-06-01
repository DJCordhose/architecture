import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-bar',
  template: `<div class="buttonbar">
  <ng-content></ng-content>
  </div>`,
  styleUrls: ['./buttonbar.component.css']
})
export class ButtonBarComponent {

  // FIXME how to define some distance between the individual buttons?
}
