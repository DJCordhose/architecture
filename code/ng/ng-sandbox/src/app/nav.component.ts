import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <h1>App</h1>
<nav>
  <a routerLink="/root">Root</a>
  <a routerLink="/counter">Counter</a>
</nav>
<router-outlet></router-outlet>
`})
export class NavComponent  {

}
