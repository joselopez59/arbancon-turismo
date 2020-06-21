import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgCalendarModule  } from 'ionic2-calendar';

import { CalendarPage } from './calendar.page';
import { CalendarPageRoutingModule } from './calendar-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule
    ,
    NgCalendarModule
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
