import { Component } from '@angular/core';

import {NavigationService, Menues} from './navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'app';
  private menues: string[] = [];

  constructor(private navigationService: NavigationService) {

  }

  doClick() {
    this.navigationService.loadNavigation('oma').subscribe(navigation => this.menues = navigation.menues);
  }
}
