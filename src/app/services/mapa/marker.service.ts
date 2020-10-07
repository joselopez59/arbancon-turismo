import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})

export class MarkerService {

  env = environment;
  
  responde():void {
    console.log("MarkerService");
  }

  // pois: string = '/assets/map/pois2.json';
  // pois: string = this.env.poisURL + "/pois";
  pois: string = this.env.cmsURL + "/pois";
  
  constructor( 
    private http: HttpClient,
    
  ) {}

  makePoisMarkers(map: L.map): void {
    console.log(this.pois);

    this.http.get(this.pois).subscribe ((res: any) => {
      //console.log(res);
      for (const c of res) {
        // console.log(c.geometry.coordinates.lat);
        // console.log(c.geometry.coordinates.lon);
        
        const marker = L.marker(
          [
            c.geometry.coordinates.lat, 
            c.geometry.coordinates.lon
          ]
        );

        marker.bindPopup(this.makePopup(c.properties.name));

        marker.addTo(map);

      }

    });
  }

  makePopup(data: any): string {
    return "" + 
      "<div>" + data + "</div>"
  }
}
