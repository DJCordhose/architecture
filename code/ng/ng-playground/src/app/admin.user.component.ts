import { Component, Input, EventEmitter, Output } from '@angular/core';

import {NavigationService, Menues} from './navigation.service';

interface User {
  name: string;
  login: string;
  group: string;
}

interface Column {
  name: string;
  sortable: boolean;
  searchable: boolean;
  type: 'dropdown' | 'text';
}

@Component({
  selector: 'app-admin-user',
  template: `<div>
  <div>
    <div>
    <h1>{{title}}</h1>
    <div>
      <app-button (send)='search()' title='Suchen'></app-button>
      <app-button (send)='all()' title='Alle'></app-button>
      <app-button (send)='reset()' title='Zürücksetzen'></app-button>
    </div>
    </div>
  </div>
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
  private users: User[];
  private columns: Column[];

  search() {
    console.log('search');
  }
  all() {
    console.log('all');
  }
  reset() {
    console.log('reset');
  }

}
