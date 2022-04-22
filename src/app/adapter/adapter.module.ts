import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdapterComponent } from './components/adapter/adapter.component';
import { HttpClientModule } from '@angular/common/http';
import { AdapterRoutingModule } from './adapter.routing';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';

import {MatCardModule} from '@angular/material/card';
import { adaptReduce } from '../store/reducers/adapter.reduce';
import { AdapterEffects } from '../store/effects/adapter.effects';


@NgModule({
  declarations: [
    AdapterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdapterRoutingModule,
    StoreModule.forFeature('adapt', adaptReduce ),
    EffectsModule.forFeature([AdapterEffects]),
    MatCardModule
  ]
})
export class AdapterModule { }
