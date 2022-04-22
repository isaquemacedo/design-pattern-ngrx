import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadVehicles, vehicleSelected } from 'src/app/store/actions/adapter.action';
import { AdapterState } from 'src/app/store/reducers/adapter.reduce';
import { VehicleAdapt } from '../../interfaces/vehicle-adapt';


@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.scss']
})
export class AdapterComponent implements OnInit {
  adapt$;

  constructor(
    private store: Store<{ adapt: AdapterState }>,
    private router: Router
  ) {
    this.adapt$ = store.select((state) => state.adapt.vehicles);
  }

  ngOnInit(): void {
    this.store.dispatch(loadVehicles())
  }

  selectVehicle(vehicle: VehicleAdapt) {
    this.store.dispatch(vehicleSelected({vehicleSelected: vehicle}))
    this.router.navigate(['/proposta'])
  }
}
