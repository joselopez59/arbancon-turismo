import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastronomiaDetailPage } from './gastronomia-detail.page';

const routes: Routes = [
  {
    path: '',
    component: GastronomiaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastronomiaDetailPageRoutingModule {}
