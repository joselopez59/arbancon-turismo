import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EventosService {

  env = environment;

  constructor( private http : HttpClient) { }

  getEventos() {
    //console.log("getEventos", this.http.get("./../assets/data/eventos.json"))
    // return this.http.get("./../assets/data/eventos.json")
    //console.log("getEventos", this.http.get("http://localhost:1337/eventos/"))
    // return this.http.get("http://localhost:1337/eventos/")
    return this.http.get(this.env.cmsURL + "/eventos/")
  }
}
