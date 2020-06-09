import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlojamientoPage } from './alojamiento.page';

const routes: Routes = [
  {
    path: '',
    component: AlojamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlojamientoPageRoutingModule {}
