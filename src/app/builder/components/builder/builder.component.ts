import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { VehicleAdapt } from 'src/app/adapter/interfaces/vehicle-adapt';
import { loadForm, loadSession } from 'src/app/store/actions/builder.action';
import { AdapterState } from 'src/app/store/reducers/adapter.reduce';
import { BuilderState } from 'src/app/store/reducers/builder.reduce';
import { BuilderForm } from '../../models/builder.form';
import { ConcreteBuilder } from '../../models/generate-builder.model';


@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
  adapt$;
  builder = new BuilderForm();
  concreteBuilder: ConcreteBuilder

  constructor(
    private storeAdapt: Store<{ adapt: AdapterState }>,
    private storeBuilder: Store<{builder: BuilderState}>
  ) {
    this.builder.createForm({
      name: '',
      cpf: '',
      email: ''
    });
    this.adapt$ = storeAdapt.select((state) => state.adapt.vehicleSelected);
    this.concreteBuilder = new ConcreteBuilder(storeBuilder, storeAdapt)
  }

  ngOnInit(): void { }

  sendForm() {
    this.storeBuilder.dispatch(loadForm({form: this.builder.client}));
    this.loadSession();
    this.sendProposal();
  }

  loadSession() {
    const obj = window.sessionStorage.getItem('exampleData');
    if (obj) {
      this.storeBuilder.dispatch(loadSession({loadSession: JSON.parse(obj)}))
    }
  }

  sendProposal() {
    console.log(this.concreteBuilder.build())
  }
}
