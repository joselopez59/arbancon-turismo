import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { EventInput, Calendar } from '@fullcalendar/core';
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGrigPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction';

import { EventosService } from '../eventos.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})

export class CalendarComponent implements OnInit, AfterViewInit {

// calendar = new FullCalendar.Calendar(calendario, {
//   // plugins: [ interactionPlugin ],
//   dateClick: this.handleDateClick.bind(this),
// });
  @ViewChild('fullcalendar', { static: true }) calendarComponent: FullCalendarComponent;

  calendarPlugins = [ interactionPlugin ];
  calendarApi: Calendar;
  initialized = false;

  events: any = '';
  eventsCalendar: any[] = [];
  calendarEvents: EventInput[] = [];

  calendarOptions: CalendarOptions = {
    locale: esLocale,
    initialView: 'dayGridMonth',
    views: {
      dayGridMonth: {
        titleFormat: { year: 'numeric', month: 'long'}
      }
    },
    aspectRatio: .85,
    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: 'next'
    },
    footerToolbar: {
      left: 'custom1',
    },
    customButtons: {
      custom1: {
        text: 'custom 1'}
    },
    // weekNumbers: true,
    // dateClick: "",
    eventSources: [
      {
        color: 'black',     // an option!
        textColor: 'yellow' // an option!
      }
    ]
  };

  public eventos: any = '';

  constructor( private eventosService: EventosService ) {
    this.calendarEvents =  [];

    this.eventosService.getEventos()
    .subscribe(data => {
      this.events = data;
      console.log(this.events);

      this.events.forEach(e => {
        const calendarevent = {
          startEditable: false,
          // id: e.EventId,
          title: e.title,
          start: new Date(e.start).getTime(),
          allDay: true,
        };
        console.log('calendarevent', calendarevent);
        this.eventsCalendar.push(calendarevent);
      });
      // calling the loadEvents Function as soon as the data are stored
      this.loadEvents();
    });

  }

  ngOnInit() {

    // this.eventosService.getEventos()
    // .subscribe(data => {
    //   this.eventos = data;
    //   // console.log('this.eventos', this.eventos);
    //   this.calendarOptions.events = this.eventos;
    // });
  }

  ngAfterViewInit() {
    this.calendarApi = this.calendarComponent.getApi();
    if (this.calendarApi && !this.initialized) {
      this.initialized = true;
      this.loadEvents();
    }
  }

  loadEvents() {

    this.calendarEvents =  this.eventsCalendar;
    this.calendarApi.removeAllEventSources(); // obligatory
    this.calendarApi.addEventSource(this.calendarEvents); // obligatory
  }

  handleDateClick(arg) {
    console.log('date click! ' + arg.dateStr);
  }

  onEventClick(arg) {
    console.log('onEventClick ' + arg.dateStr);
  }


}
