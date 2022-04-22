import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { VehiclesService } from "src/app/adapter/services/vehicles.service";
import { loadVehicles, loadVehiclesError, loadVehiclesSuccess } from "../actions/adapter.action";



@Injectable()
export class AdapterEffects {
  constructor(
    private actions: Actions,
    private vehiclesService: VehiclesService
  ) {}

  loadVehicles$ = createEffect(() => this.actions.pipe(
    ofType(loadVehicles),
    mergeMap(() => this.vehiclesService.get().pipe(
      map(vehicles => loadVehiclesSuccess({vehicles})),
      catchError(() =>  [loadVehiclesError()] )
    ))
  ))
}
