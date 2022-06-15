import { createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions/list.actions';

export const initialState: any[] = [];

export const listReducer = createReducer(
  initialState,
  on(fromActions.ShowAllSuccessAction, (state, payload) => payload)
);
