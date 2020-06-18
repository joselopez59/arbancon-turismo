import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ActividadesService {


  constructor( private http : HttpClient ) { }

  // getCategoria() {
  //   return this.http.get("./../assets/data/actividades.json")
  //   .pipe(
  //     map((response: any) => response[0]))
  // }
  
  getactividades() {
    return this.http.get("./../assets/data/actividades.json")
  }

  getActividad(id) {
    
    return this.http.get("./../assets/data/actividades.json")
    .pipe(
     // map((response: any) => response[0].find(elem => elem.id == id))
      map((response: any) => response[0].items.find(elem => elem.id == id))
    ); 
  }
}

