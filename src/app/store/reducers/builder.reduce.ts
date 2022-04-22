import { createReducer, on } from "@ngrx/store";
import { Client } from "src/app/builder/interfaces/client";
import { loadForm, loadSession } from "src/app/store/actions/builder.action";

export interface BuilderState {
  form: Client,
  loadSession: {}
}

export const initialState: BuilderState = {
  form: {
    name: '',
    cpf: '',
    email: '' 
  },
  loadSession: {}
}

export const builderReduce = createReducer(
  initialState,
  on(loadForm, (state, {form}) => {
    return {
      ...state,
      form: form
    }
  }),
  on(loadSession, (state, {loadSession}) => {
    return {
      ...state,
      loadSession: loadSession
    }
  })
);