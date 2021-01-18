import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPage } from './calendar.page';
import { CalendarPageRoutingModule } from './calendar-routing.module';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction'; // a plugin
// import googleCalendarPlugin from '@fullcalendar/google-calendar';

// FullCalendarModule.registerPlugins([
//   //interactionPlugin
//   //googleCalendarPlugin
// ]);

// FullCalendarModule.registerPlugins(
//   [ dayGridPlugin ]
// );

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    FullCalendarModule
  ],
  declarations: [CalendarPage],
  providers: [ ]
})

export class CalendarPageModule {}
