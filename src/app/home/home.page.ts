import { Component, OnInit, ViewChild } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';


import { AlojamientosPage } from '../alojamientos/alojamientos.page';
import { WheaterService } from './../services/wheater.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

  alojamientosPage = AlojamientosPage;

  config: SuperTabsConfig = {
    debug: true,
    allowElementScroll: false,
  };


  temp: any;
  iconUrl: any;

  constructor(
    public wheaterService: WheaterService
  ) {
    //this.wheater = [];
  }

  ngOnInit() {}

  ionViewWillEnter() { 
    this.getWheater();
  }
  
  getWheater() {
    this.wheaterService.getWheater().subscribe(response => {
     
      this.temp = Math.round(parseFloat(response.main.temp)) + '°';
      
      this.iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
      console.log(this.iconUrl);
    })
  }
  

}
