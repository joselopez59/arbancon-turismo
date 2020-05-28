import { Component, ViewChild } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';

import { AlojamientosPage } from '../alojamientos/alojamientos.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

  alojamientosPage = AlojamientosPage;

  config: SuperTabsConfig = {
    debug: true,
    allowElementScroll: false,
  };

  constructor() {}

}
