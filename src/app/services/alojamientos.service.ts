import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

//import { Alojamiento } from '../interfaces/alojamiento';

@Injectable({
  providedIn: 'root'
})

export class AlojamientosService {

  //alojamiento: Alojamiento;

  constructor(private http : HttpClient) { }

  getAlojamientos() {
    //return this.alojamientos;
    //console.log(this.http.get("../../"));
    return this.http.get("./../assets/data/alojamientos.json")
  }

  getAlojamiento(id) {
    // return this.alojamiento;
    //return this.alojamientos.filter(d => d.id === id)
    
    return this.http.get("./../assets/data/alojamientos.json")
    .pipe(
      map((response: any) => response.find(elem => elem.id == id))
    );
  }
}
