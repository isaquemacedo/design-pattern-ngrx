import { ActionReducerMap } from "@ngrx/store";
import { builderReduce, BuilderState } from "./builder.reduce";
import { AdapterState, adaptReduce } from "./adapter.reduce";

interface AppState {
  builderState: BuilderState;
  adapterState: AdapterState
}

export const reducers: ActionReducerMap<AppState> = {
  builderState: builderReduce,
  adapterState: adaptReduce
};
