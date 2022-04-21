import { createAction, props } from "@ngrx/store";

export const loadVehicles = createAction('[Vehicle Page] Load Vehicles')
export const loadVehiclesSuccess = createAction('[Vehicles API] Vehicles loaded sucess', props<any>());
export const loadVehiclesError = createAction('[Vehicle Page] Load Vehicles Error')