import { Component, OnInit, ViewChild } from '@angular/core';
//import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';

import { WheaterService } from './../services/wheater.service';

//import { AlojamientosPage } from '../alojamientos/alojamientos.page';
import { AlojamientosService } from './../services/alojamientos.service';
import { GastronomiaService } from './../services/gastronomia.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  //@ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

  //alojamientosPage = AlojamientosPage;

  config: SuperTabsConfig = {
    debug: true,
    allowElementScroll: false,
  };

  temp: any;
  iconUrl: any;
  
  public alojamientos: [];
  public gastronomias: [];

  constructor(
    public wheaterService: WheaterService,
    public alojamientosService: AlojamientosService,
    public gastronomiaService: GastronomiaService
  ) {}

  ngOnInit() {
    this.getWheater();
    this.alojamientos = this.alojamientosService.getAlojamientos();
    this.gastronomias = this.gastronomiaService.getGastronomias();
  }
  
  // ionViewWillEnter() { 
  //   this.getWheater();
  // }
  
  getWheater() {
    this.wheaterService.getWheater().subscribe(response => {
     
      this.temp = Math.round(parseFloat(response.main.temp)) + '°';     
      this.iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
      
    })
  }
  

}
