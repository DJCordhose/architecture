import { Component } from '@angular/core';

import {NavigationService, Menues} from './navigation.service';
import { UserService } from './user.service';
import { User } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'app';
  private menues: string[] = [];
  private users: User[] = [];
  constructor(private navigationService: NavigationService, private userService: UserService) {

  }

  doClick() {
    this.navigationService.loadNavigation('oma').subscribe(navigation => this.menues = navigation.menues);
    this.userService.loadUsers('test', 'test', 'testgroup').subscribe(users => this.users = users);
  }
}
