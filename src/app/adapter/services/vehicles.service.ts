import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../interfaces/vehicle';
import { VehiclesAdapter } from '../models/vehicles.adapter';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private environment = environment;
  private adapter = new VehiclesAdapter(); 

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.environment.api}/veiculos`).pipe(
      map(a => this.adapter.adapt(a as Vehicle[]))
    )
  }
}
