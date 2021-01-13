import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { environment } from '../../../environments/environment';
import { PatrimonioService } from './../../services/patrimonio.service';

@Component({
  selector: 'app-patrimonio-detail',
  templateUrl: './patrimonio-detail.page.html',
  styleUrls: ['./patrimonio-detail.page.scss'],
})
export class PatrimonioDetailPage implements OnInit {

  env = environment;
  public patrimonio: any = '';
  public imgURL;

  constructor(
    private activatedRoute: ActivatedRoute,
    private patrimonioService: PatrimonioService,
    private inAppBrowser: InAppBrowser,
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log('id: ', id);
    this.patrimonioService.getPatrimonio(id)
      .subscribe(data => {
        this.patrimonio = data;
        console.log('this.patrimonio', this.patrimonio);
        this.imgURL = this.patrimonio.cardImage.url;
      });
  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }

}
