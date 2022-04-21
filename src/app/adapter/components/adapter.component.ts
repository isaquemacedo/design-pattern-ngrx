import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { VehicleAdapt } from '../interfaces/vehicle-adapt';
import { VehiclesService } from '../services/vehicles.service';
import { loadVehicles } from '../store/adapter.action';
import { getVehicles } from '../store/adapter.reduce';

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.scss']
})
export class AdapterComponent implements OnInit {
  adapt$;

  constructor(
    private store: Store<{ adapt: {vehicles: VehicleAdapt[]} }>
  ) {
    this.adapt$ = store.select(getVehicles);
  }

  ngOnInit(): void {
    this.store.dispatch(loadVehicles())
  }

  toString(obj: any) {
    return JSON.stringify(obj)
  }
}
