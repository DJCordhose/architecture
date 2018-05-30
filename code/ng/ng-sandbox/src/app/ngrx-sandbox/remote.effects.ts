import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { GreetingService } from '../greeting.service';

import { SET, LOAD, FAILED } from './counter';

@Injectable()
export class RemoteEffects {

  constructor(private greetingService: GreetingService, private actions$: Actions) {}

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType('LOAD'),
    mergeMap(action => this.greetingService.requestGreeting('huhu').pipe(
      // If successful, dispatch success action with result
      map(data => ({ type: 'SET', payload: data.message.length })),
      // If request fails, dispatch failed action
      catchError(() => of({ type: 'FAILED'}))
    ))
  );

}
