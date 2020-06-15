import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatrimonioDetailPage } from './patrimonio-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PatrimonioDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatrimonioDetailPageRoutingModule {}
