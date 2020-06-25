import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPage } from './calendar.page';
import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarModule } from 'ion2-calendar';

import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, localeEsExtra);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    CalendarModule
  ],
  declarations: [CalendarPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    ]
})

export class CalendarPageModule {}
