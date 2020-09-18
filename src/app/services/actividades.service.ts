import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ActividadesService {

  env = environment;
  
  constructor( private http : HttpClient ) { }
  
  getactividades() {
    return this.http.get(this.env.cmsURL + "/actividades")
  }

  getActividad(id) {  
    return this.http.get(this.env.cmsURL + "/actividades/" + id)
  }
}

