import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ActividadesService {


  constructor( private http : HttpClient ) { }
  
  getactividades() {
    return this.http.get("./../assets/data/actividades.json")
  }

  getActividad(id) {
    
    return this.http.get("./../assets/data/actividades.json")
    .pipe(
      map((response: any) => response.items.find(elem => elem.id == id))
    ); 
  }
}

