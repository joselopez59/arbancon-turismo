import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams  } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

export class ModalPage implements OnInit {

  title: string;
  propietario: string;
  calle: string;
  localidad: string;
  provincia: string;
  gmapsURL: string;
  tel: string;
  mail: string;
  footers: [];

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    // console.log(this.navParams);
    this.title = this.navParams.data.title;
    this.propietario = this.navParams.data.propietario;
    this.calle = this.navParams.data.calle;
    this.localidad = this.navParams.data.localidad;
    this.provincia = this.navParams.data.provincia;
    this.gmapsURL = this.navParams.data.gmapsURL;
    this.tel = this.navParams.data.tel;
    this.mail = this.navParams.data.mail;
    this.footers = this.navParams.data.buttons;
  }

  openWindow(method: string, target: string) {
    // console.log(method + target);
    window.open(method + target);
  }

  async closeModal() {
    // console.log("closeModal");
    await this.modalController.dismiss();
  }
}
