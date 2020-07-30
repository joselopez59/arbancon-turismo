import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
//import dayGridPlugin from '@fullcalendar/daygrid'; 

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})

export class CalendarPage implements OnInit {

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: [
      { title: 'event 1', date: '2020-07-01' },
      { title: 'event 2', date: '2020-07-05' }
    ]
  };

  constructor() {}

  ngOnInit(){}
}
