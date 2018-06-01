import { Component, Input, EventEmitter, Output } from '@angular/core';

import {NavigationService, Menues} from './navigation.service';

import {UserService} from './user.service';
import { User } from './types';

export class Column {
  name: string;
  sortable: boolean;
  searchable: boolean;
  type: 'text'|'dropdown';

  constructor(name: string, sortable: boolean, searchable: boolean, type: 'text'|'dropdown') {
    this.name = name;
    this.sortable = sortable;
    this.searchable = searchable;
    this.type = type;
  }
}

@Component({
  selector: 'app-admin-user',
  template: `
  <div>
    <app-master [titles]='titles' (send)='clicked()'></app-master>
    <app-title>
      <h1>{{title}}</h1>
    </app-title>
    <app-wrapper [columns]='columns' [data]='users' (searchEdited)='searchEdited($event)'></app-wrapper>
    <app-button-bar>
         <app-button (send)='search()' title='Suchen'></app-button>
         <app-button (send)='all()' title='Alle'></app-button>
         <app-button (send)='reset()' title='Zürücksetzen'></app-button>
    </app-button-bar>
    <app-detail [element]='selectedUser' (saveEvent)='saveUser($event)'></app-detail>
  </div>`
  // template: `<div>
  // <app-master>
  // Olli:
  //   <app-title>
  //   <h1>{{title}}</h1>
  // Arjan:
  //   <app-button-bar>
  //     <app-button (send)='search()' title='Suchen'></app-button>
  //     <app-button (send)='all()' title='Alle'></app-button>
  //     <app-button (send)='reset()' title='Zürücksetzen'></app-button>
  //   </app-button-bar>
  //   </app-title>
  // Susanne:
  //   <app-table columns={{columns}} data={{users}}></app-table>
  // </app-master>
  // Marcel:
  // <app-detail>
  // Dani:
  // <app-pw></app-pw>
  // </app-detail>
  // </div>`
})
export class AdminUserComponent {
  private title = 'Benutzerverwaltung';
  private titles = [{name: 'olli'}, {name: 'Opa'}];
  private users: User[];
  private columns: Column[];
  private selectedUser: User = {name: 'marcel', usergroup: 'faf', login: 'fa'};

  constructor(private userService: UserService) {
    this.columns = [
      new Column('Name', true, true, 'text'),
      new Column('Login', true, true, 'text'),
      new Column('Benutzergrupppe', true, true, 'dropdown'),
    ];
  }

  clicked() {
    console.log('clicked');
  }
  search() {
    console.log('search');
  }

  all() {
    console.log('all');
    this.userService.loadUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    }
    );
  }

  reset() {
    console.log('reset');
  }

  saveUser(user: User) {
    console.log(user);
  }

  searchEdited(searches: string[]) {
    console.log(searches);
  }

}
