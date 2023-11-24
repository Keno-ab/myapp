import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CPasajerosPage } from './c-pasajeros.page';

const routes: Routes = [
  {
    path: '',
    component: CPasajerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CPasajerosPageRoutingModule {}
