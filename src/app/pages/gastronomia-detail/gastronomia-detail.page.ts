import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ModalController } from '@ionic/angular';
// import { ActionSheetController } from '@ionic/angular';

import { GastronomiaService } from './../../services/gastronomia.service';
import { environment } from '../../../environments/environment';
import { ModalPage } from './../../modal/modal.page';

@Component({
  selector: 'app-gastronomia-detail',
  templateUrl: './gastronomia-detail.page.html',
  styleUrls: ['./gastronomia-detail.page.scss'],
})
export class GastronomiaDetailPage implements OnInit {

  env = environment;
  public gastronomia;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000,
    },
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private gastronomiaService: GastronomiaService,
    private inAppBrowser: InAppBrowser,
    public modalController: ModalController
  ) {
      this.gastronomia = "";
   }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.gastronomiaService.getGastronomia(id)
    .subscribe(data => {
      this.gastronomia = data;
      //console.log(this.gastronomia);
    });
  }

  async openModal() {

    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        "title": this.gastronomia.name,
        "calle": this.gastronomia.calle,
        "localidad": this.gastronomia.localidad,
        "provincia": this.gastronomia.provincia,
        "gmapsURL": this.gastronomia.gmapsURL,
        "tel": this.gastronomia.tel,
        "mail": this.gastronomia.mail,
        "url": this.gastronomia.url,
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
