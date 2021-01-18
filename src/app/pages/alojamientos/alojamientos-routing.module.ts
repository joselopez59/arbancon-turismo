import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlojamientosPage } from './alojamientos.page';
import { EscapadasComponent } from './escapadas/escapadas.component';

const routes: Routes = [
  {
    path: '',
    component: AlojamientosPage
  },
  {
    path: 'escapadas',
    component: EscapadasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlojamientosPageRoutingModule {}
