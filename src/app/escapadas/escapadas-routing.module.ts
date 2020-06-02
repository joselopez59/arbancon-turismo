import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscapadasPage } from './escapadas.page';

const routes: Routes = [
  {
    path: '',
    component: EscapadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscapadasPageRoutingModule {}
