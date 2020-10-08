import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})

export class MarkerService {

  env = environment;
  
  // responde():void {
  //   console.log("MarkerService");
  // }

  // pois: string = '/assets/map/pois2.json';
  // pois: string = this.env.poisURL + "/pois";
  pois: string = this.env.cmsURL + "/pois";
  
  constructor( private http: HttpClient ) {}

  getPois(layer: string) {
    return this.http.get(this.env.cmsURL + "/" + layer + "/")
  }

   
}
