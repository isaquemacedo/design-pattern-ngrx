import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { VehicleAdapt } from 'src/app/adapter/interfaces/vehicle-adapt';
import { loadForm, loadSession } from 'src/app/store/actions/builder.action';
import { BuilderState } from 'src/app/store/reducers/builder.reduce';
import { Client } from '../../interfaces/client';
import { BuilderForm } from '../../models/builder.form';


@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
  adapt$;
  formClient: Observable<any>;
  builder = new BuilderForm()
  loadSession: Observable<any>;

  constructor(
    private storeAdapt: Store<{ adapt: {vehicleSelected: VehicleAdapt} }>,
    private storeBuilder: Store<{builder: BuilderState}>
  ) {
    this.builder.createForm({
      name: '',
      cpf: '',
      email: ''
    });
    this.adapt$ = storeAdapt.select((state) => state.adapt.vehicleSelected);
    this.formClient = storeBuilder.select((state) => state.builder.form);
    this.loadSession = storeBuilder.select((state) => state.builder.loadSession);
  }

  ngOnInit(): void {
    this.showInfos();
  }

  sendForm() {
    this.storeBuilder.dispatch(loadForm(this.builder.client))
    this.sendSession()
  }

  sendSession() {
    const obj = window.sessionStorage.getItem('exampleData');
    if (obj) {
      this.storeBuilder.dispatch(loadSession(JSON.parse(obj)))
    }
  }

  showInfos() {
    this.loadSession.subscribe(v => {
      console.log(v, 'loadSession')
    })
    this.formClient.subscribe(v => {
      console.log(v, 'formClient')
    })
  }
}
