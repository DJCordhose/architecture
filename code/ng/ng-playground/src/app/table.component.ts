
import { Component, Input, EventEmitter, Output } from '@angular/core';

import {NavigationService, Menues} from './navigation.service';
import {AdminUserComponent, Column} from './admin.user.component';
import { User } from './types';


@Component({
  selector: 'app-table',
  template: `
  <table>
    <tr>
        <td>
        <div><table><tr><td *ngFor="let c of columns">{{ c.name }}</td></tr>
        <tr>
        <td><input [(ngModel)]='searchName' (blur)='sendSearchEdited()' type="text"></td>
        <td><input [(ngModel)]='searchLogin' (blur)='sendSearchEdited()' type="text"></td>
        <td><input [(ngModel)]='searchUserGroup' (blur)='sendSearchEdited()' type="text"></td>
        </tr>
        </table></div>
        </td>
    </tr>
    <tr *ngFor="let u of data; let even = even" [ngClass]="{ even: even }">
        <td>{{ u.name }}</td>
        <td>{{ u.login }}</td>
        <td>{{ u.usergroup }}</td>
    </tr>
  </table>`,
  styleUrls: ['./table.component.css']
})

export class TableComponent {

    @Input() private data: User[];

    @Input() private columns: Column[];

    @Output() private searchEdited = new EventEmitter();

    private searchName: string;
    private searchLogin: string;
    private searchUserGroup: string;

    private sendSearchEdited() {
        const searches = [this.searchName, this.searchLogin, this.searchUserGroup];
        this.searchEdited.emit(searches);
    }

}

