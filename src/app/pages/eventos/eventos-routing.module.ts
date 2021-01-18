import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosPage } from './eventos.page';
import { CalendarioComponent } from './calendario/calendario.component';

const routes: Routes = [
  {
    path: '',
    component: EventosPage
  },
  {
    path: 'calendario',
    component: CalendarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosPageRoutingModule {}
