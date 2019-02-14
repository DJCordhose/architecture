import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

// https://angular.io/guide/dynamic-form

@Component({
  selector: 'app-detail',
  template: `
    <div *ngFor='let k of keys'>
      {{k}}: {{element[k]}}
    </div>
    <app-button (send)='saveAction()' title='Speichern'></app-button>
  `,
  styles: []
})
export class DetailComponent implements OnInit {
  @Output() saveEvent = new EventEmitter();

  @Input() private element;
  private keys;

  constructor() { }

  ngOnInit() {
    if (this.element) {
      this.keys = Object.keys(this.element);
    }
  }

  saveAction() {
    this.saveEvent.emit(this.element);
  }

}
