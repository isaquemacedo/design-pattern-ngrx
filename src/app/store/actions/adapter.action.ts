import { createAction, props } from "@ngrx/store";
import { VehicleAdapt } from "src/app/adapter/interfaces/vehicle-adapt";


export const loadVehicles = createAction('[Vehicle Page] Load Vehicles')
export const loadVehiclesSuccess = createAction('[Vehicles API] Vehicles loaded sucess', props<any>());
export const loadVehiclesError = createAction('[Vehicle Page] Load Vehicles Error')

export const vehicleSelected = createAction('[Vehicle Page] Vehicle Selected', props<{vehicleSelected: VehicleAdapt}>());