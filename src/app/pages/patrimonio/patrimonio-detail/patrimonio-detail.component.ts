import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { environment } from 'src/environments/environment';
import { PatrimonioService } from '../patrimonio.service';

@Component({
  selector: 'app-patrimonio-detail',
  templateUrl: './patrimonio-detail.component.html',
  styleUrls: ['./patrimonio-detail.component.scss'],
})

export class PatrimonioDetailComponent implements OnInit {

  env = environment;
  patrimonio: any = '';
  public imgURL = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private patrimonioService: PatrimonioService,
    private inAppBrowser: InAppBrowser,
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

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