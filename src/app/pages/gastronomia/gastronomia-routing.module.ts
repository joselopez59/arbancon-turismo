import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastronomiaPage } from './gastronomia.page';
import { GastronomiaDetailPage } from '../gastronomia-detail/gastronomia-detail.page';
import { OfertasComponent } from './ofertas/ofertas.component';

const routes: Routes = [
  {
    path: '',
    component: GastronomiaPage
  },
  {
    path: ':id',
    component: GastronomiaDetailPage
  },
  {
    path: 'ofertas',
    component: OfertasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastronomiaPageRoutingModule {}
