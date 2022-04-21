import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './test.reduce';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { AdapterEffects } from './adapter/store/adapter.effects';
import { adaptReduce } from './adapter/store/adapter.reduce';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ adapt: adaptReduce }),
    BrowserAnimationsModule,
    EffectsModule.forRoot([AdapterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
