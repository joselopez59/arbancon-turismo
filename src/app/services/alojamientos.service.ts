import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

//import { Alojamiento } from '../interfaces/alojamiento';

@Injectable({
  providedIn: 'root'
})

export class AlojamientosService {

  //alojamiento: Alojamiento;
  env = environment;

  constructor( private http : HttpClient ) { }

  getAlojamientos() {
    return this.http.get(this.env.cmsURL + "/alojamientos/")
  }

  getAlojamiento(id) {
    return this.http.get(this.env.cmsURL + "/alojamientos/" + id)
  }
}
