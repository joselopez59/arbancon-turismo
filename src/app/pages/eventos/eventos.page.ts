import { Component, OnInit } from '@angular/core';
import { EventosService } from './../../services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})

export class EventosPage implements OnInit {

  public expanded = false;
  public eventos;

  constructor(
    private eventosService: EventosService
  ) { }

  ngOnInit() {
    this.eventosService.getEventos()
    .subscribe(data => {
      this.eventos = data;
      //console.log("this.eventos", this.eventos);
    });
  }

  expandHeader() {
    //console.log("expandHeader()");
    if (this.expanded) {
      this.expanded = false;
    } else {    
      this.expanded = !this.expanded;   
    }
  }

}
