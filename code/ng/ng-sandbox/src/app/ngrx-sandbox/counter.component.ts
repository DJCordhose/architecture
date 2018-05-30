import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET, LOAD, SET } from './counter';

import { ActivatedRoute } from '@angular/router';

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

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
    const count = this.route.snapshot.paramMap.get('count');
    if (count) {
      this.store.dispatch({ type: SET, payload: Number(count) });
    } else {
      this.store.dispatch({ type: RESET });
    }
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
