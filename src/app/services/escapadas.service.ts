import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EscapadasService {

  constructor() { }

  escapadas: any = [
    {
      vendor: "Casa rural La Tahona",
      name: "ESCAPADA PARA GRUPOS",
      features: [
          "Dos noches",
          "Cena para doce",
          "Tapeo",
          "Cesta de productos locales"
      ],
      text: "",
      price: "794",
      url: "",
      image: "images/casas/tahona/logoTahona.png"
    },
    {
      vendor: "Apartamentos Señora Clara",
      name: "ESCAPADA ESPECIAL PAREJAS",
      features: [
          "Dos noches",
          "Cena para dos",
          "Tapeo",
          "Cesta de productos locales"
      ],
      text: "",
      price: "259",
      url: "",
      image: "images/casas/sraClara/logoSraClara.png"
    },

  ]

  getEscapadas() {
    return this.escapadas;
  }
}
