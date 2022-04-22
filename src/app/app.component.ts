import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AdapterSession } from './builder/models/adapter-session.model';
import { Simulation } from './builder/interfaces/simulation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'design-patterns';

  constructor(private http: HttpClient,
    private store: Store<{ count: number }>) {
  }

  ngOnInit(): void {
    const simulationAdapter = new AdapterSession();
    const obj = simulationAdapter.adapt({
      "simulationId": 123123,
      "installmentsOptions": [12, 24, 36, 48],
      "feesValue": 0.89,
      "operatorId": 999,
      "installmentSelected": 24
    } as Simulation)
    window.sessionStorage.setItem('exampleData', JSON.stringify(obj))
  }
}
