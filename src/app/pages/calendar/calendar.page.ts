import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
// import googleCalendarPlugin from '@fullcalendar/google-calendar';
//import dayGridPlugin from '@fullcalendar/daygrid'; 
import { EventosService } from './../../services/eventos.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})

export class CalendarPage implements OnInit {

  public eventos;
  
  // @ViewChild('calendar') calendarComponent: FullCalendarComponent;

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
    //weekNumbers: true,
    //dateClick: this.handleDateClick.bind(this),
    eventSources: [ 
      {
        color: 'black',     // an option!
        textColor: 'yellow' // an option!
      }      
    ]
  };

  constructor(
    private eventosService: EventosService
  ) { }

  ngOnInit() {

    this.eventosService.getEventos()
    .subscribe(data => {
      this.eventos = data;
      //console.log("this.eventos", this.eventos);
      this.calendarOptions.events = this.eventos;
      
    });
  }
}
