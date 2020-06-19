import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadesService } from './../../services/actividades.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage implements OnInit {

  public actividad: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private actividadesService: ActividadesService
  ) { 
    this.actividad = "";
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    //console.log("id: " + id);
    this.actividadesService.getActividad(id)
      .subscribe(data => {
        this.actividad = data;
        
      });
  }
}
