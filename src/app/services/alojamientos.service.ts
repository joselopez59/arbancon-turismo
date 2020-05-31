import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AlojamientosService {

  constructor() { }

  alojamientos: any = [
    {
      type: "Casa rural",
      properties: {
        id: "tahona",
        vendor: "Casa rural la Tahona",
        name: "La Tahona",        
      }
    },
    {
      type: "Casa rural",
      properties: {
        "id": "albertas",
        "vendor": "Casa rural las Albertas",
        "name": "Las Albertas",
      }
    }
  ];

  getAlojamientos() {
    return this.alojamientos;
  }
}
