import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';

import { EventosService } from '../../eventos/eventos.service';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
})

export class CalendarioComponent implements OnInit {

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
    // footerToolbar: {
    //   left: 'custom1',
    // },
    // customButtons: {
    //   custom1: {
    //     text: 'custom 1'}
    // },
    // weekNumbers: true,
    // dateClick: this.handleDateClick.bind(this),
    eventSources: [
      {
        color: 'black',     // an option!
        textColor: 'yellow' // an option!
      }
    ]
  };

  public eventos;

  constructor( private eventosService: EventosService ) { }

  ngOnInit() {
    this.eventosService.getEventos()
    .subscribe(data => {
      this.eventos = data;
      // console.log("this.eventos", this.eventos);
      this.calendarOptions.events = this.eventos;
    });
  }
}
