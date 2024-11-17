import {createReducer, on} from "@ngrx/store";
import {decrement, increment, reset} from "./counter.action";

export interface counterState {
  count: number
}

export const initialCounterState: counterState = {
  count: 0
}

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, (state: any) => ({...state, count: state.count + 1})),
  on(decrement, (state: any) => ({...state, count: state.count - 1})),
  on(reset, (state: any) => ({...state, count: 0})),
)