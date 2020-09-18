import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ModalController } from '@ionic/angular';

import { AlojamientosService } from './../../services/alojamientos.service';
import { environment } from '../../../environments/environment';
//import { Alojamiento } from '../../interfaces/alojamiento';

@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamiento.page.html',
  styleUrls: ['./alojamiento.page.scss'],
})

export class AlojamientoPage implements OnInit {

  //alojamiento: Alojamiento;
  env = environment;
  public alojamiento;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000,
    },
    //loop: true,
    //autoHeight: true,
    //roundLengths: true,
    //spaceBetween: 0,
    //centeredSlides: true,
    //centeredSlidesBounds: false
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private alojamientosService: AlojamientosService,
    private inAppBrowser: InAppBrowser,
    public modalController: ModalController
  ) {
      this.alojamiento = "";
   }

  ngOnInit() {
    console.log("alojamiento-page ngOnInit");
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.alojamientosService.getAlojamiento(id)
    .subscribe(data => {
      this.alojamiento = data;
      console.log("this.alojamiento", this.alojamiento);
    });
  }

  async openContact(alojamiento: any) {

  }

  openSpeakerShare(){}

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }

}
