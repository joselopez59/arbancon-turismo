import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular';
//import dayGridPlugin from '@fullcalendar/daygrid'; 

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})

export class CalendarPage implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  //calendarVisible = true;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    aspectRatio: .85,
    //weekNumbers: true,
    //dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'event 1', date: '2020-08-01' },
      { title: 'event 2', date: '2020-08-05' }
    ]
  };


  constructor() {}

  ngOnInit(){
    // var calendarEl = document.getElementById('calendario');
    // console.log("calendar", calendarEl )
  }
}
