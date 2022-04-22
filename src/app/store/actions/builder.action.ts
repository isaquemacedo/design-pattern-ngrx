import { createAction, props } from "@ngrx/store";
import { Client } from "src/app/builder/interfaces/client";

export const loadForm = createAction('[Proposal Page] Load Form', props<{form: Client}>());
export const loadSession = createAction('[Proposal Page] Load Session', props<{loadSession: {}}>());