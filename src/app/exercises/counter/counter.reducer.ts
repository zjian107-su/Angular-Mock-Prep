import { decrement, reset, increment } from './counter.action';
import { createReducer, on } from '@ngrx/store';

export const initiateState = 0;

export const counterReducer = createReducer(
  initiateState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
