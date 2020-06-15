import { Component, OnInit } from '@angular/core';
import { AlojamientosService } from './../../services/alojamientos.service';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.page.html',
  styleUrls: ['./alojamientos.page.scss'],
})

export class AlojamientosPage implements OnInit {

  public alojamientos;
  
  constructor(
    public alojamientosService: AlojamientosService
  ) {}

  ngOnInit() {
    this.alojamientosService.getAlojamientos()
    .subscribe(data => {
      this.alojamientos = data;
      //console.log(this.alojamientos);
    });   
  }
}
