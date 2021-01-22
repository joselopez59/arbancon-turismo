import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadesPage } from './actividades.page';
import { MapaComponent } from './mapa/mapa.component';

const routes: Routes = [
  {
    path: '',
    component: ActividadesPage
  },
  {
    path: 'mapa',
    component: MapaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadesPageRoutingModule {}
