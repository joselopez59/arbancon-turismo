import { Component, OnInit, ViewChild } from '@angular/core';
//import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';

import { WheaterService } from './../services/wheater.service';

//import { AlojamientosPage } from '../alojamientos/alojamientos.page';
import { AlojamientosService } from './../services/alojamientos.service';

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

  constructor(
    public wheaterService: WheaterService,
    public alojamientosService: AlojamientosService
  ) {
    //this.wheater = [];
    this.alojamientos = this.alojamientosService.getAlojamientos();
    //console.log(this.alojamientos[0].properties.id);
  }

  ngOnInit() {
    this.getWheater()
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
