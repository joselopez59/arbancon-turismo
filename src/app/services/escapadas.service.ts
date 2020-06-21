import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EscapadasService {

  constructor(private http : HttpClient) { }

  getEscapadas() {
    return this.http.get("./../assets/data/escapadas.json")
  }
}
