import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular';
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
  public eventosArray = [
    { title: 'event 1', date: '2020-08-01' },
    { title: 'event 2', date: '2020-08-05' }
  ];
    
  public eventosArray2;

  // @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    aspectRatio: .85,
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
  ) {
      this.eventosArray2 = [];
  }

  ngOnInit() {

    this.eventosService.getEventos()
    .subscribe(data => {
      this.eventos = data;
      // console.log("this.eventos", this.eventos);

      this.calendarOptions.events = this.eventos.items;
      
    });
  }
}
