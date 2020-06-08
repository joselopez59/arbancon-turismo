import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EscapadasService {

  constructor() { }

  escapadas: any = [
    {
      vendor: "Casa rural La Tahona",
      name: "Escapada para grupos",
      features: [    
        "Doce personas",
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
      vendor: "Las Albertas Casa Suit",
      name: "Escapada especial parejas II",
      features: [
          "Dos noches",
          "Cena para dos",
          "Tapeo",
          "Cesta de productos locales"
      ],
      text: "",
      price: "299",
      url: "",
      image: "images/casas/albertas/logoAlbertas.jpg"
    },
    {
      vendor: "Apartamentos Señora Clara",
      name: "Escapada especial parejas",
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
    {
      vendor: "Casa rural Melquiades",
      name: "Escapada familiar",
      features: [
          "Dos noches",
          "Cena para cuatro",
          "Tapeo",
          "Cesta de productos locales",
          "Alquiler de Biciletas"
      ],
      text: "",
      price: "290",
      url: "",
      image: "images/casas/melquiades/melquiadesLogo100x.jpg"
    }
  ]

  getEscapadas() {
    return this.escapadas;
  }
}
