import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlojamientoDetailComponent } from './alojamiento-detail/alojamiento-detail.component';

import { AlojamientosPage } from './alojamientos.page';
import { EscapadasComponent } from './escapadas/escapadas.component';

const routes: Routes = [
  {
    path: '',
    component: AlojamientosPage
  },
  {
    path: ':id',
    component: AlojamientoDetailComponent
  },
  // {
  //   path: 'escapadas',
  //   component: EscapadasComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlojamientosPageRoutingModule {}
