import { createReducer, on } from '@ngrx/store';
import { VehicleAdapt } from 'src/app/adapter/interfaces/vehicle-adapt';
import { loadVehiclesSuccess, vehicleSelected } from '../actions/adapter.action';


export interface AdapterState {
  vehicles: VehicleAdapt[],
  vehicleSelected: VehicleAdapt
}

export const initialState: AdapterState = { 
  vehicles: [],
  vehicleSelected: {
    manufacturer: '',
    model: '',
    year: 2021,
    value: 0,
    image: '',
  }
};

export const adaptReduce = createReducer(
  initialState,
  on(loadVehiclesSuccess, (state, {vehicles}) => {
    return {
      ...state,
      vehicles: vehicles
    }
  }),
  on(vehicleSelected, (state, {vehicleSelected}) => {
    return {
      ...state,
      vehicleSelected: vehicleSelected
    }
  })
);

// export const getVehicleState = createFeatureSelector<{vehicles: VehicleAdapt[], vehicleSelected: VehicleAdapt}>('adapt');

// export const getVehicles = createSelector(
//   getVehicleState, 
//   (state: VehicleAdapt[]) => state
// );

// export const getVehiclesSelected = createSelector(
//   getVehicleState, 
//   (vehicleSelected: VehicleAdapt) => state
// );