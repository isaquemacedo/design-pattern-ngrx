import { state } from '@angular/animations';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { VehicleAdapt } from '../interfaces/vehicle-adapt';
import { loadVehiclesSuccess } from './adapter.action';

export const initialState: { vehicles: VehicleAdapt[] } = { vehicles: [] };

export const adaptReduce = createReducer(
  initialState,
  on(loadVehiclesSuccess, (state, {vehicles}) => ( vehicles ) )
);

export const getVehicleState = createFeatureSelector<VehicleAdapt[]>('adapt');

export const getVehicles = createSelector(
  getVehicleState, 
  (state: VehicleAdapt[]) => state 
);