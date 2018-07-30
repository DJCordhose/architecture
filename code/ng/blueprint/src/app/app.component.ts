import { Component, OnInit } from '@angular/core';
import { GreetingService, Message } from './greeting.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  beers = ['astra', 'holsten', 'jever', 'ratsherren'];
  greeting: string;
  response: Observable<string>;

  constructor(private greetingService: GreetingService) {
  }

  update(title: string) {
    console.log(title);
    this.title = title;
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.response = this.greetingService.requestGreeting(this.title).pipe(map(greeting => greeting.message));
    this.response.subscribe(greeting => this.greeting = greeting);
  }


}
