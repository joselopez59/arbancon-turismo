import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GastronomiaService {

  env = environment;

  constructor(private http: HttpClient) { }

  getGastronomias() {
    return this.http.get(this.env.cmsURL + '/gastronomias/');
  }

  getGastronomia(id) {
    return this.http.get(this.env.cmsURL + '/gastronomias/' + id);
  }

  getOfertas() {
    return this.http.get(this.env.cmsURL + '/ofertas/');
  }
}
