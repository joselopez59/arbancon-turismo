import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EscapadasService {

  env = environment;

  constructor(private http: HttpClient) { }

  getEscapadas() {
    // return this.http.get("./../assets/data/escapadas.json")
    return this.http.get(this.env.cmsURL + '/escapadas/');
  }
}
