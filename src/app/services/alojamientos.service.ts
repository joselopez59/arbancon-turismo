import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

//import { Alojamiento } from '../interfaces/alojamiento';

@Injectable({
  providedIn: 'root'
})

export class AlojamientosService {

  //alojamiento: Alojamiento;

  constructor( private http : HttpClient ) { }

  getAlojamientos() {
    return this.http.get("./../assets/data/alojamientos.json")
  }

  getAlojamiento(id) {
    
    return this.http.get("./../assets/data/alojamientos.json")
    .pipe(
      map((response: any) => response.items.find(elem => elem.id == id))
    );
  }
}
