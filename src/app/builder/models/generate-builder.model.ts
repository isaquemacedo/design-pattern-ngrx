import { select, Store } from "@ngrx/store";
import { map, Observable, pipe } from "rxjs";
import { BuilderState } from "src/app/store/reducers/builder.reduce";
import { selectBuilderForm } from "src/app/store/selectors/selector";
import { Client } from "src/app/builder/interfaces/client";
import { AdapterState } from "src/app/store/reducers/adapter.reduce";

export class GenerateBuilder {
  constructor() {}

  vehicleSelected() {}
  clientForm() {}
  sessionData() {}
  build() {}
}

export class ConcreteBuilder extends GenerateBuilder {
  constructor(
    private storeBuilder: Store<{builder: BuilderState}>,
    private storeAdapter: Store<{ adapt: AdapterState }>
  ) {
    super();

    this.storeBuilder.select((state) => state.builder ).subscribe(v => { 
      this.data.form = v.form;
      this.data.loadSession = v.loadSession;
    })
    this.storeAdapter.select((state) => state.adapt ).subscribe(v => { 
      this.data.vehicleSelected = v.vehicleSelected
    })
  }

  data = {
    form: {},
    loadSession: {},
    vehicleSelected: {}
  }

  override vehicleSelected() {
    this.storeAdapter.select((state) => state.adapt ).subscribe(v => {
      this.data.vehicleSelected = v.vehicleSelected
    })
    return this.data.vehicleSelected;
  }

  override clientForm() {
    this.storeBuilder.select((state) => state.builder ).subscribe(v => { 
      this.data.form = v.form;
    })
    return this.data.form;
  }
  
  override sessionData() {
    this.storeBuilder.select((state) => state.builder ).subscribe(v => {
      this.data.loadSession = v.loadSession;
    })
    return this.data.loadSession;
  }

  override build() {
    return {
      client: this.clientForm(),
      vehicle: this.vehicleSelected(),
      simulation: this.sessionData()
    }
  }
}