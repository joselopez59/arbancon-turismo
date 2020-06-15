import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PatrimonioService {

  constructor( private http : HttpClient ) { }

  getPatrimonios() {
    return this.http.get("./../assets/data/patrimonio.json")
  }

  getPatrimonio(id) {
    return this.http.get("./../assets/data/patrimonio.json")
    .pipe(
      map((response: any) => response.find(elem => elem.id == id))
    );
  }
}     
