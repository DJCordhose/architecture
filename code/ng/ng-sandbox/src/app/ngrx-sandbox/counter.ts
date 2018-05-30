import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const LOAD = 'LOAD';
export const SET = 'SET';
export const FAILED = 'FAILED';

export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case SET:
      return (<any> action).payload;

    case RESET:
      return 0;

    default:
      return state;
  }
}
