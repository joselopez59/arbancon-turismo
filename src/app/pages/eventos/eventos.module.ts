import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';

import { EventosPageRoutingModule } from './eventos-routing.module';
import { EventosPage } from './eventos.page';
import { ExpandableComponent } from './../../components/expandable/expandable.component';
// import { CalendarioComponent } from './calendario/calendario.component';

FullCalendarModule.registerPlugins(
  [ dayGridPlugin ]
);
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosPageRoutingModule,
    // FullCalendarModule
  ],
  declarations: [
    EventosPage,
    ExpandableComponent,
    // CalendarioComponent
  ]
})

export class EventosPageModule {}
