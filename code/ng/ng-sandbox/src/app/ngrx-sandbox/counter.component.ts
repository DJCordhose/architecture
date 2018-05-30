import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET, LOAD } from './counter';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-counter-component',
  template: `
  <button (click)="increment()">Increment</button>
  <div>Current Count: {{ count$ | async }}</div>
  <button (click)="decrement()">Decrement</button>

  <button (click)="reset()">Reset Counter</button>
  <br>
  <button (click)="load()">Load Remote</button>
`})
export class CounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
    this.store.dispatch({ type: INCREMENT });
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

  load() {
    this.store.dispatch({ type: LOAD });
  }
}
