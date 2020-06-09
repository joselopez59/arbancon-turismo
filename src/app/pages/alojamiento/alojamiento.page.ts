import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlojamientosService } from './../../services/alojamientos.service';
//import { Alojamiento } from '../../interfaces/alojamiento';

@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamiento.page.html',
  styleUrls: ['./alojamiento.page.scss'],
})

export class AlojamientoPage implements OnInit {

  //alojamiento: Alojamiento;
  alojamiento: any;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000,
    },
    //loop: true,
    //autoHeight: true,
    //roundLengths: true,
    //spaceBetween: 0,
    //centeredSlides: true,
    //centeredSlidesBounds: false
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private alojamientosService: AlojamientosService
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.alojamiento = this.alojamientosService.getAlojamiento(id)[0];
    //console.log (this.alojamientoItem.id);
  }

}
