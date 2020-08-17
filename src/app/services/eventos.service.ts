import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor( private http : HttpClient) { }

  getEventos() {
    //console.log("getEventos", this.http.get("./../assets/data/eventos.json"))
    return this.http.get("./../assets/data/eventos.json")
  }
}
