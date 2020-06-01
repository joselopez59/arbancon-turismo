import { Injectable } from '@angular/core';

import { Alojamiento } from '../interfaces/alojamiento';

@Injectable({
  providedIn: 'root'
})

export class AlojamientosService {

  constructor() { }

  alojamientos: any = [
    {
      id: "tahona",
      vendor: "Casa rural la Tahona",
      name: "La Tahona",
      type: "Casa rural",
      profil: "Casona típica de la Sierra de Guadalajara especialmente acomodada para grupos o familias de hasta 12 personas. Dispone de 6 habitaciones dobles y 4 cuartos de baño, cocina completamente equipada ademas de un amplio patio con barbacoa. Ideal para encuentros familiares y reuniones de amigos.",
      features: [
        {
          typ: "personas",
          amount: 12
        },
        {
          typ: "habitaciones",
          amount: 6
        },
        {
          typ: "baños",
          amount: 4
        },
        {
          typ: "patio cerrado",
          amount: ""
        },
        {
          typ: "barbacoa",
          amount: ""
        },
        {
          typ: "chimenea",
          amount: ""
        }
      ],
      url: "http://www.tahonarural.es",
      urlContact: "http://www.tahonarural.es/contacto.html",
      mail: "correo@tahonarural.es",
      tel: "629 076 146",
      mainImage: "images/casas/tahona/tahona01-120x.jpg",
      slider: [
        "images/casas/tahona/tahona01-350x.jpg",
        "images/casas/tahona/tahona02-350x.jpg",
        "images/casas/tahona/tahona03-350x.jpg",
        "images/casas/tahona/tahona04-350x.jpg",
        "images/casas/tahona/tahona05-350x.jpg",
        "images/casas/tahona/tahona06-350x.jpg",
        "images/casas/tahona/tahona07-350x.jpg"
      ]

    },
    {
      id: "albertas",
      vendor: "Casa rural las Albertas",
      name: "Las Albertas",
      type: "Casa rural",
      profil: "Alojamiento de construcción tradicional con todas las comodidades y con una cuidada decoración, pensada especialmente para parejas o familias. La distribución de la casa consta de un salón comedor con cocina totalmente equipada, chimenea y aseo. Por una escalera de madera en el salón se accede a la planta superior donde se encuentran 2 habitaciones abuhardilladas, una de ellas con jacuzzi, y un baño completo. Servicio de masajes en la propia casa, Planes Romanticos y más.",
      features: [
        {
          typ: "personas",
          amount: 6
        },
        {
          typ: "plantas",
          amount: 2
        },
        {
          typ: "habitaciones",
          amount: 2
        },
        {
          typ: "baños",
          amount: 2
        },
        {
          typ: "jacuzzi",
          amount: 1
        }
      ],
      url: "http://lasalbertas.com",
      urlContact: "https://www.escapadarural.com/widget-js/57d1555109fff",
      mail: "info@lasalbertas.com",
      tel: "630 85 17 93",
      mainImage: "images/casas/albertas/albertas01-150x.jpg",
      slider: [
        "images/casas/albertas/albertas01-350x.jpg",
        "images/casas/albertas/albertas02-350x.jpg",
        "images/casas/albertas/albertas03-350x.jpg",
        "images/casas/albertas/albertas04-350x.jpg",
        "images/casas/albertas/albertas05-350x.jpg",
        "images/casas/albertas/albertas06-350x.jpg",
        "images/casas/albertas/albertas07-350x.jpg",
        "images/casas/albertas/albertas08-350x.jpg",
        "images/casas/albertas/albertas09-350x.jpg"
      ]
    }
  ];

  getAlojamientos() {
    return this.alojamientos;
  }

  getAlojamiento(id) {
    return this.alojamientos.filter(d => d.id === id)
  }
}
