import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

//import { Alojamiento } from '../interfaces/alojamiento';

@Injectable({
  providedIn: 'root'
})

export class AlojamientosService {

  //alojamiento: Alojamiento;

  constructor(private http : HttpClient) { }

  alojamientos: any = [
    {
      id: "tahona",
      vendor: "Casa rural la Tahona",
      name: "La Tahona",
      type: "Casa rural",
      shortProfil: "Ideal para grupos de hasta 12 personas",
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
      mainImage: "images/casas/tahona/tahonaMain-100x.jpg",
      logo: "images/casas/tahona/logoTahona.png",
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
      shortProfil: "Para parejas o familias de hasta 6 personas",
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
      logo: "images/casas/albertas/logoAlbertas.jpg",
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
    },
    {
      id: "sraClara",
      vendor: "Apartamentos señora Clara",
      name: "Sra. Clara",
      type: "Apartamentos",
      shortProfil: "Especialmente pensados para parejas o familias con niños",
      profil: "Consta de dos apartamentos: Apartamento Maria especialmente pensado para parejas o familias con niños, diáfano de unos 50m, donde se integra la cama, la zona de estar y un cuarto de baño completo con jacuzzi privado así como cocina totalmente equipada. Apartamento Claudia especialmente pensado para parejas o familia con niños, diáfano de unos 40m, donde se integra la cama,la zona de estar y un cuarto de baño completo con jacuzzi privado así como cocina totalmente equipada.",
      features: [
        {
          typ: "personas",
          amount: 7
        },
        {
          typ: "apartamentos",
          amount: 2
        },
        {
          typ: "baños",
          amount: 2
        },
        {
          typ: "jacuzzis",
          amount: "2"
        }
      ],
      url: "http://www.sraclara.com",
      urlContact: "http://www.sraclara.com",
      mail: "info@sraclara.com",
      tel: "619 814 498",
      mainImage: "images/casas/sraClara/sraClara01.webp",
      logo: "images/casas/sraClara/logoSraClara.png",
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
      id: "melquiades",
      vendor: "Casa rural Melquiades",
      name: "Melquiades",
      type: "Casa rural",
      shortProfil: "Diseñada para parejas o familias de hasta 6 personas ",
      profil: "Casa Rural Melquiades es una alojamiento de construcción tradicional con todas las comodidades, pensado especialmente para familias o parejas. La distribución de la casa es de un salón comedor con cocina totalmente equipada, baño completo y habitación de matrimonio. Desde el salón, por escalera, se accede a la planta superior donde se encuentran una habitación doble abuhardillada y una terraza con vistas en pleno centro de Arbancón.",
      features: [
        {
          typ: "personas",
          amount: 6
        },
        {
          typ: "apartamentos",
          amount: 2
        },
        {
          typ: "plantas",
          amount: "2"
        },
        {
          typ: "baños",
          amount: 1
        }     
      ],
      url: "http://www.sraclara.com",
      urlContact: "http://www.sraclara.com",
      mail: "info@sraclara.com",
      tel: "619 814 498",
      mainImage: "images/casas/sraClara/sraClara01.webp",
      logo: "images/casas/sraClara/logoSraClara.png",
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
      id: "golondrinas",
      vendor: "Casa rural las Golondrinas",
      name: "Las Golondrinas",
      type: "Casa rural",
      shortProfil: "Casa rural remodelada para hasta 10 personas",
      profil: "Casa construida a mediados del siglo XIX recientemente remodela para convertirla en una casa rural actual pero sin perder el encanto de las casas antiguas de pueblo. El alojamiento está dividido en dos partes, pudiendo alquilarse por separado de forma independiente conservando la intimidad y todo lo necesario, o conjuntamente.",
      features: [
        {
          typ: "personas",
          amount: 10
        },
        {
          typ: "partes",
          amount: 2
        }
      ],
      url: "http://www.sraclara.com",
      urlContact: "http://www.sraclara.com",
      mail: "info@sraclara.com",
      tel: "619 814 498",
      mainImage: "images/casas/sraClara/sraClara01.webp",
      logo: "images/casas/sraClara/logoSraClara.png",
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
      id: "balcon",
      vendor: "El Balcón de Arbancón",
      name: "el balcón de Arbancón",
      type: "Hostal",
      shortProfil: "Hostal con 3 habitaciones y 1 apartamento",
      profil: "El Balcón de Arbancón es un edificio de construcción moderna y confortable dotado de amplios servicios para la comodidad y confort tanto de los huéspedes como de los comensales. Disponemos de tres habitaciones con cama de matrimonio y terraza independiente, una habitacion con cama de matrimonio y litera con dos camas y en la misma planta sala de estar con cocina tipo americana. Disponemos además de un solárium con duchas en el ático con maravillosas vistas del entorno del pueblo. Y justo en frente tenemos las instalaciones municipales con tenis, frontón y piscina. El Balcón de Arbancón también dispone de Bar, Restaurante y Asador, para disfrutar de la gastronomíade un entorno tan singular como es el Norte de Guadalajara. También disponemos de zona Wifi.",
      features: [
        {
          typ: "personas",
          amount: 16
        },
        {
          typ: "habitaciones",
          amount: 4
        }
        ,
        {
            typ: "baños",
            amount: 4
        },
        {
            typ: "solarium",
            amount: ""
        }
      ],
      url: "http://www.sraclara.com",
      urlContact: "http://www.sraclara.com",
      mail: "info@sraclara.com",
      tel: "619 814 498",
      mainImage: "images/casas/sraClara/sraClara01.webp",
      logo: "images/casas/sraClara/logoSraClara.png",
      slider: [
        "images/casas/tahona/tahona01-350x.jpg",
        "images/casas/tahona/tahona02-350x.jpg",
        "images/casas/tahona/tahona03-350x.jpg",
        "images/casas/tahona/tahona04-350x.jpg",
        "images/casas/tahona/tahona05-350x.jpg",
        "images/casas/tahona/tahona06-350x.jpg",
        "images/casas/tahona/tahona07-350x.jpg"
      ]
    }
  ];

  getAlojamientos() {
    //return this.alojamientos;
    //console.log(this.http.get("../../"));
    return this.http.get("./../assets/data/alojamientos.json")
  }

  getAlojamiento(id) {
    // return this.alojamiento;
    //return this.alojamientos.filter(d => d.id === id)
    
    return this.http.get("./../assets/data/alojamientos.json")
    .pipe(
      map((response: any) => response.find(elem => elem.id == id))
    );
  }
}
