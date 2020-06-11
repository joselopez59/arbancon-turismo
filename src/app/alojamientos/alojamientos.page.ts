import { Component, OnInit } from '@angular/core';
import { AlojamientosService } from './../services/alojamientos.service';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.page.html',
  styleUrls: ['./alojamientos.page.scss'],
})

export class AlojamientosPage implements OnInit {
  
  public alojamientos: [];
  
  constructor(
    public alojamientosService: AlojamientosService
  ) {}

  ngOnInit() {
    //this.alojamientos = this.alojamientosService.getAlojamientos();
    //console.log("this.alojamientos: " + this.alojamientos);
  }

}
