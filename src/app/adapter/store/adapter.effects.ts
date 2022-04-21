import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { VehiclesService } from "../services/vehicles.service";
import { loadVehiclesError, loadVehiclesSuccess } from "./adapter.action";

@Injectable()
export class AdapterEffects {
  constructor(
    private actions: Actions,
    private vehiclesService: VehiclesService
  ) {}

  loadVehicles$ = createEffect(() => this.actions.pipe(
    ofType('[Vehicle Page] Load Vehicles'),
    mergeMap(() => this.vehiclesService.get().pipe(
      map(vehicles => loadVehiclesSuccess({vehicles})),
      catchError(() =>  [loadVehiclesError()] )
    ))
  ))
}
