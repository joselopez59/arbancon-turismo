import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

import { GastronomiaService } from './../../services/gastronomia.service';
import { environment } from '../../../environments/environment';

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
    public actionSheetCtrl: ActionSheetController
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

  async openContact(gastronomia: any) {
    const mode = 'ios'; // this.config.get('mode');
    const actionSheet = await this.actionSheetCtrl.create({
      
      buttons: [
        {
          text: gastronomia.calle,
          icon: "home-outline",
        },
        {
          text: gastronomia.localidad,
          icon: null,
          handler: () => {
            //window.open('tel:' + gastronomia.tel )
          }
        },
        {
          text: gastronomia.tel,
          icon: "call-outline",
          handler: () => {
            window.open('tel:' + gastronomia.tel )
          }
        },
        {
          text: `${gastronomia.mail}`,
          icon: "mail-outline",
          handler: () => {
            window.open('mailto:' + gastronomia.mail)
          }
        },
        {
          text: `${gastronomia.mail}`,
          icon: "mail-outline",
          handler: () => {
            window.open('mailto:' + gastronomia.mail)
          }
        },
        {
          text: `${gastronomia.url}`,
          icon: "home-outline",
          handler: () => {
            window.open(gastronomia.url)
          }
        }
      ]
    });

    await actionSheet.present();
  }

  openSpeakerShare(){}

}
