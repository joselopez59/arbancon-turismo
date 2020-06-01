import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlojamientoDetailPage } from './alojamiento-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AlojamientoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlojamientoDetailPageRoutingModule {}
