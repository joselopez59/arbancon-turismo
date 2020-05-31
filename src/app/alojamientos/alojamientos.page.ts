import { Component, OnInit } from '@angular/core';
import { AlojamientosService } from './../services/alojamientos.service';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.page.html',
  styleUrls: ['./alojamientos.page.scss'],
})
export class AlojamientosPage implements OnInit {
  
  alojamientos: [] = [];
  
  constructor(
    public alojamientosService: AlojamientosService
  ) {
    this.alojamientos = this.alojamientosService.getAlojamientos();
    console.log(this.alojamientos);
   }

  

  ionViewWillEnter() { 
    //this.getAlojamientos();
  }

  getAlojamientos() {
    
  }

  ngOnInit() {
  }

}
