import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  beers = ['astra', 'holsten', 'jever', 'ratsherren'];

  update(title: string) {
    console.log(title);
    this.title = title;
  }
}
