
import { Component, Input, EventEmitter, Output } from '@angular/core';

import {NavigationService, Menues} from './navigation.service';
import {AdminUserComponent, User, Column} from './admin.user.component';


@Component({
  selector: 'app-table',
  template: `
  <table>
    <tr>
        <td *ngFor="let c of columns"><div><table><tr><td>{{ c.name }}</td></tr>
        <tr><td><input id="c.name" type="text"></td></tr></table></div></td>
    </tr>
    <tr *ngFor="let u of data; let even = even" [ngClass]="{ even: even }">
        <td>{{ u.name }}</td>
        <td>{{ u.login }}</td>
        <td>{{ u.group }}</td>
    </tr>
  </table>`,
  styleUrls: ['./table.component.css']
})

export class TableComponent{


    @Input() private data: User[];

    @Input() private columns: Column[];

    


}

