import { createAction, props } from "@ngrx/store";

export const loadForm = createAction('[Proposal Page] Load Form', props<any>());
export const loadSession = createAction('[Proposal Page] Load Session', props<any>());