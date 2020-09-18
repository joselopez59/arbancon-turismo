import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PatrimonioService {

  env = environment;

  constructor( private http : HttpClient ) { }

  getPatrimonios() {
    return this.http.get(this.env.cmsURL + "/patromonios/")  //TO DO: Corregir
  }

  getPatrimonio(id) {
    // return this.getPatrimonios()
    // .pipe(
    //   map((response: any) => response.find(elem => elem.idName == id))
    // );

    return this.http.get(this.env.cmsURL + "/patromonios/" + id)

  }
}     
