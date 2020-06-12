import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GastronomiaService {

  constructor(private http : HttpClient) { }

  getGastronomias() {
    return this.http.get("./../assets/data/gastronomias.json")
  }

  getGastronomia(id) {
    
    return this.http.get("./../assets/data/gastronomias.json")
    .pipe(
      map((response: any) => response.find(elem => elem.id == id))
    );
  }

}