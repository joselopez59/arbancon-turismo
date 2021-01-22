import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AlojamientosService {

  env = environment;

  constructor( private http: HttpClient ) { }

  getAlojamientos() {
    return this.http.get(this.env.cmsURL + '/alojamientos/');
  }

  getAlojamiento(id) {
    return this.http.get(this.env.cmsURL + '/alojamientos/' + id);
  }
}
