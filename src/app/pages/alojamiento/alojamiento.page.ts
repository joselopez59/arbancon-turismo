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
  public alojamiento;

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
  ) {
      this.alojamiento = "";
   }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.alojamientosService.getAlojamiento(id)
    .subscribe(data => {
      this.alojamiento = data;
      //console.log(this.alojamiento);
    });
    
  }

}
