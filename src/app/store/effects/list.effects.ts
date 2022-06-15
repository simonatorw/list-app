import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import * as fromActions from '../actions/list.actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

  loadAllItems$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ShowAllAction),
    mergeMap(() => this.http.get('https://jsonplaceholder.typicode.com/photos').pipe(
      map(data => fromActions.ShowAllSuccessAction(data))
    ))
  ));
}