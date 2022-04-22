import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderRoutingModule } from './builder.routing';
import { BuilderComponent } from './components/builder/builder.component';
import { StoreModule } from '@ngrx/store';

import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import {MatButtonModule} from '@angular/material/button';

import { adaptReduce } from '../store/reducers/adapter.reduce';
import { builderReduce } from '../store/reducers/builder.reduce';
import { reducers } from '../store/reducers';

@NgModule({
  declarations: [
    BuilderComponent
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule,
    StoreModule.forFeature('builder', builderReduce ),
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxMaskModule.forRoot()
  ]
})
export class BuilderModule { }
