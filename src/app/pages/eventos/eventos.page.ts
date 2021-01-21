import { Component, OnInit } from '@angular/core';
import { EventosService } from './eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})

export class EventosPage implements OnInit {

  expanded = false;
  eventos: any[] = [];

  constructor(
    private eventosService: EventosService
  ) { }

  ngOnInit() {
    this.eventosService.getEventos()
    .valueChanges
    .subscribe(result => {
      this.eventos = result.data.eventos;
    });
  }

  expandHeader() {

    if (this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = !this.expanded;
    }
  }

}
