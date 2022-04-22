import { createSelector } from "@ngrx/store";
import { BuilderState } from "../reducers/builder.reduce";

export const selectBuilder = (state: BuilderState) => state;

export const selectBuilderForm = createSelector(
  selectBuilder,
  (state: BuilderState) => state.form
);