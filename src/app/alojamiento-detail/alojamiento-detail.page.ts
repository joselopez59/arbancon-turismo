import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlojamientosService } from './../services/alojamientos.service';
import { Alojamiento } from '../interfaces/alojamiento';

@Component({
  selector: 'app-alojamiento-detail',
  templateUrl: './alojamiento-detail.page.html',
  styleUrls: ['./alojamiento-detail.page.scss'],
})
export class AlojamientoDetailPage implements OnInit {

  alojamiento: Alojamiento;
  
  //public alojamiento: [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private alojamientosService: AlojamientosService
  ) { 
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id: " + id)

    this.alojamiento = this.alojamientosService.getAlojamiento(id);
    //console.log (this.alojamiento[0].id);
    
  }

  
  ngOnInit() {}

}
