import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GastronomiaService {

  constructor() { }

  gastronomias: any = [
    {
      "id": "refugio",
      "name": "El Refugio del Abuelo",
      "features": [
        "Bar",
        "Restaurante",
        "Terraza de verano"
      ],
      "profile": "Basado en la gastronomía mas tradicional de la zona, destacando los platos de cuchara especialmente el Cocido de la Sierra, o los Guisos de Puchero como las Judías de Arbancón, carnes a la brasa, asados, torreznos y platos de temporada complementan una carta pensada para disfrutar de la buena mesa junto a la chimenea en los meses de otoño e invierno y de terraza de verano durante las épocas estivales.",
      "url": "https://elrefugiodelabuelo.wixsite.com/elrefugiodelabuelo",
      "urlContact": "elrefugiodelabueloarbancon@gmail.com",
      "mail": "elrefugiodelabueloarbancon@gmail.com",
      "tel": "+34 642 880 944",
      "image": "images/gastro/refugio/refugio01.webp",
      "slider": [
        "images/gastro/refugio/refugio01-x300.jpg",
        "images/gastro/refugio/refugio02x300.jpg"
      ]
    },
    {

      "id": "terraza",
      "name": "Terraza de verano",
      "features": [
        "Terraza",
        "Bar",  
        "Barbacoa"
      ],
      "profile": "Junto a las Piscinas de Verano de Arbancón y las zonas de recreo del Parque de la Zarzabala y zona deportiva se encuentra ubicada la Terraza de Verano. Un lugar amplio y fresco, perfecto para disfrutar de carnes a la brasa en nuestra barbacoa, y una zona inmejorable para disfrutar de una refrigerio durante las épocas estivales.",
      "url": "https://elrefugiodelabuelo.wixsite.com/elrefugiodelabuelo",
      "urlContact": "elrefugiodelabueloarbancon@gmail.com",
      "mail": "elrefugiodelabueloarbancon@gmail.com",
      "tel": "+34 642 880 944",
      "image": "images/gastro/terraza/terraza01-150x.jpg",
      "slider": [
        "images/gastro/terraza/terraza02.webp",
        "images/gastro/terraza/terraza03.webp",
        "images/gastro/terraza/terraza04.webp"
      ]
    },
    {
      "id": "espacio",
      "name": "Espacio de la Villa",
      "features": [
        "Eventos",
        "Celebraciones",
        "Terraza"
      ],
      "profile": "Todo tipo de celebraciones y reuniones de grupos, con posibilidad de comedor e instalaciones de uso exclusivo, con varias capacidades. Disponemos de varios menús para grupos, ademas de servicios complementarios de Candy Bar y servicio de animación infantil.",
      "url": "https://elrefugiodelabuelo.wixsite.com/elrefugiodelabuelo",
      "urlContact": "elrefugiodelabueloarbancon@gmail.com",
      "mail": "elrefugiodelabueloarbancon@gmail.com",
      "tel": "+34 642 880 944",
      "image": "images/gastro/espacio/logoEspacioVilla.webp",
      "slider": [
        "images/gastro/espacio/logoEspacioVilla.webp",
        "images/gastro/espacio/logoEspacioVilla.webp"
      ]
    },
    {
      "id": "balcon",
      "name": "El balcón de Arbancón",
      "features": [
        "Hostal",
        "Bar",
        "Restaurante"
      ],
      "profile": "Durante todos los fines de semana y festivos del año, disponemos de menús con varios primeros y segundos a elegir con platos con la gastronomía mas tradicional de la zona. Con servicio diarios, ademas, ofrecemos servicios de comidas y cenas, tanto para los alojados en nuestro hostal como para todo el publico, con varios platos a elegir.",
      "url": "https://elbalcondearbancon.wixsite.com/hostal",
      "urlContact": "elrefugiodelabueloarbancon@gmail.com",
      "mail": "elrefugiodelabueloarbancon@gmail.com",
      "tel": "+34 949 85 54 31",
      "image": "images/gastro/balcon/gastroBalcon01-150x.jpg",
      "slider": [
        "images/gastro/balcon/gastroBalcon02-350x.jpg",
        "images/gastro/balcon/gastroBalcon03-350x.jpg",
        "images/gastro/balcon/gastroBalcon04-350x.jpg"
      ]
    },
    {

      "id": "despensa",
      "name": "La despensa de Arbancón",
      "features": [
        "Ultramarinos",
        "Pan fresco diario",
        "Información turística"
      ],
      "profile": "Venta de todo tipo de productos de primera necesidad y artículos de decoración. Se realizan encargos especiales bajo pedido en la tienda o por telefono. La Despensa de Arbancón ofrece a sus visitantes información turística sobre la zona y los alrededores para el difrute de su estancia.",
      "url": "https://ladespensaarbancon.wixsite.com/ladespensadearbancon",
      "urlContact": "ladespensadearbancon@gmail.com",
      "mail": "ladespensadearbancon@gmail.com",
      "tel": "+34 675 04 19 91",
      "image": "images/gastro/despensa/despensa01.webp",
      "slider": [
        "images/gastro/despensa/logo.webp",
        "images/gastro/despensa/despensa01.webp",
      ]
    },
    {
      "id": "marques",
      "name": "Patatas el Marqués, mejores no las ves",
      "description": "Productos naturales de la huerta de Arbancón",
      "features": [
        "Patatas",
        "Ajos",
        "Hortalizas de temporada"
      ],
      "href": "",
      "image": "images/gastro/marques/marques01.jpg"
    },
    {
      "id": "alvaro",
      "name": "Productos naturales Álvaro Cerrada",
      "description": "Productos naturales de la huerta de Arbancón",
      "features": [
        "Huevos frescos",
        "Hortalizas de temporada"
      ],
      "href": "",
      "image": "images/gastro/alvaro/alvaro01.jpg"
    }
  ];

  getGastronomias() {
    return this.gastronomias;
  }

  getGastronomia(id) {
    return this.gastronomias.filter(d => d.id === id)
  }

}