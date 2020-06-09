import { Component, OnInit } from '@angular/core';
import { AlojamientosService } from './../../services/alojamientos.service';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.page.html',
  styleUrls: ['./alojamientos.page.scss'],
})

export class AlojamientosPage implements OnInit {

  public alojamientosArray: [];
  
  constructor(
    public alojamientosService: AlojamientosService
  ) {}

  ngOnInit() {
    this.alojamientosArray = this.alojamientosService.getAlojamientos();
    console.log("this.alojamientosArray: " + this.alojamientosArray);
  }

}
