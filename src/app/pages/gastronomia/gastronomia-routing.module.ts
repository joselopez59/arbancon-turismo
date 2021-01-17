import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastronomiaPage } from './gastronomia.page';
import { OfertasComponent } from './ofertas/ofertas.component';

const routes: Routes = [
  {
    path: '',
    component: GastronomiaPage
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
