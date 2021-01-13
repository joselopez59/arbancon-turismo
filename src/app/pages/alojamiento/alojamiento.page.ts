import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ModalController } from '@ionic/angular';

import { AlojamientosService } from './../../services/alojamientos.service';
import { environment } from '../../../environments/environment';
import { ModalPage } from './../../modal/modal.page';

@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamiento.page.html',
  styleUrls: ['./alojamiento.page.scss'],
})

export class AlojamientoPage implements OnInit {

  // alojamiento: Alojamiento;
  env = environment;
  public alojamiento: any = '';

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000,
    },

  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private alojamientosService: AlojamientosService,
    private inAppBrowser: InAppBrowser,
    public modalController: ModalController
  ) {
      // this.alojamiento = '';
   }

  ngOnInit() {
    // console.log("alojamiento-page ngOnInit");
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.alojamientosService.getAlojamiento(id)
    .subscribe(data => {
      this.alojamiento = data;
      // console.log("this.alojamiento", this.alojamiento);
    });
  }

  async openModal() {

    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        title: this.alojamiento.vendor,
        propietario: this.alojamiento.propietario,
        calle: this.alojamiento.calle,
        localidad: this.alojamiento.localidad,
        provincia: this.alojamiento.provincia,
        gmapsURL: this.alojamiento.gmapsURL,
        tel: this.alojamiento.tel,
        mail: this.alojamiento.mail,
        url: this.alojamiento.url,
      }
    });

    return await modal.present();
  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }

}
