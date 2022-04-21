import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdapterComponent } from './components/adapter.component';
import { HttpClientModule } from '@angular/common/http';
import { AdapterRoutingModule } from './adapter.routing';
import { EffectsModule } from '@ngrx/effects';
import { AdapterEffects } from './store/adapter.effects';
import { StoreModule } from '@ngrx/store';
import { adaptReduce } from './store/adapter.reduce';
import {MatListModule} from '@angular/material/list';


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
    MatListModule
  ]
})
export class AdapterModule { }
