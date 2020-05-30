import { Component, OnInit, ViewChild } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';
import { Observable } from 'rxjs/Observable';

import { AlojamientosPage } from '../alojamientos/alojamientos.page';
import { WheaterService } from './../services/wheater.service';
import { resolve } from 'dns';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

  constructor( public weatherService: WheaterService) {}

  wheater: Observable<any>;

  ngOnInit(){
    console.log("HomePage onInit()");
    this.wheater = this.weatherService.load();
    console.log(this.wheater);
  }

  @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

  alojamientosPage = AlojamientosPage;

  config: SuperTabsConfig = {
    debug: true,
    allowElementScroll: false,
  };

  

}
