import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/veiculos',
    pathMatch: 'full'
  },
  {
    path: 'veiculos',
    loadChildren: () => import('./adapter/adapter.module').then(a => a.AdapterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
