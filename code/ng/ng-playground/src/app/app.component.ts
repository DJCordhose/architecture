
import {NavigationService, Menues} from './navigation.service';
import { UserService } from './user.service';
import { User } from './types';
import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'app';
  private menues: string[] = [];
  private users: User[] = [];
  private iframeSrc: string = "http://localhost:8081";
  private msg: string;

  constructor(private navigationService: NavigationService, private userService: UserService) {
    window.addEventListener('message', event => {
    const msg = event.data;
    this.signalMessage(msg);
    });

  }

  signalMessage(data) {
    this.msg = data
  }

  doClick() {
    this.navigationService.loadNavigation('oma').subscribe(navigation => this.menues = navigation.menues);
    this.userService.loadUsers('test', 'test', 'testgroup').subscribe(users => this.users = users);
  }
}
