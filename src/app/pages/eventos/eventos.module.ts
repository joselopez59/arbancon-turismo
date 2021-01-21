import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';

import { EventosPageRoutingModule } from './eventos-routing.module';
import { ExpandableModule } from 'src/app/components/expandable/expandable.module';
import { EventosPage } from './eventos.page';
// import { CalendarioComponent } from './calendario/calendario.component';

FullCalendarModule.registerPlugins(
  [ dayGridPlugin ]
);
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EventosPageRoutingModule,
    ExpandableModule
    // FullCalendarModule
  ],
  declarations: [
    EventosPage,
    // CalendarioComponent
  ]
})

export class EventosPageModule {}
