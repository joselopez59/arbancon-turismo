import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapaPageModule } from 'src/app/pages/mapa/mapa.module';

// import { environment } from '../../../environments/environment';
import * as L from 'leaflet';
import { PopUpService } from './pop-up.service';


@Injectable({
  providedIn: 'root'
})

export class MarkerService {
  
  responde():void {
    console.log("MarkerService");
  }

  pois: string = '/assets/map/pois.json';

  constructor( 
    private http: HttpClient,
    //private PopUpService
  ) {}

  makePoisMarkers(map: L.map): void {
    this.http.get(this.pois).subscribe ((res: any) => {
      
      
      for (const c of res.features) {
        console.log(c.properties.name);
        const lat = c.geometry.coordinates[0];
        //console.log("lat", lat);
        const lon = c.geometry.coordinates[1];
        //console.log("lon", lon);

        const marker = L.marker([lon, lat]);

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
