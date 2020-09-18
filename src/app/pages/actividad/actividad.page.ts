import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ActividadesService } from './../../services/actividades.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})

export class ActividadPage implements OnInit {

  public env = environment;
  public actividad;
  public imgURL;

  constructor(
    private activatedRoute: ActivatedRoute,
    private actividadesService: ActividadesService
  ) { 
      this.actividad = "";
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
   
    this.actividadesService.getActividad(id)
      .subscribe(data => {
        this.actividad = data;
        //console.log("this.actividad", this.actividad.cardImage.url);
        this.imgURL = this.actividad.cardImage.url;
      });
  }
}
