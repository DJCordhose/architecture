import { Component, Input, EventEmitter, Output } from '@angular/core';

import {NavigationService, Menues} from './navigation.service';
import { User } from './types';
import { Column } from './admin.user.component';

@Component({
  selector: 'app-wrapper',
  template: `<app-table [columns]='columns' [data]='data' (searchEdited)='wrappedSearchEdited($event)'></app-table>

`
})
// Just to illustrate how to wrap a dump component and pass down input and pass up events
export class TableWrapperComponent {
  @Input() private data: User[];

  @Input() private columns: Column[];

  @Output() private searchEdited = new EventEmitter();

  private wrappedSearchEdited(event: string[]) {
    this.searchEdited.emit(event);
  }
}
