import { createAction, props } from '@ngrx/store';

export const ShowAllAction = createAction('[ARTICLE] Show All');
export const ShowAllSuccessAction = createAction('[ARTICLE] Show All Success', props<any>());
