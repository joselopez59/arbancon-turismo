import { Component, OnInit } from '@angular/core';

import { PatrimonioService } from './patrimonio.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.page.html',
  styleUrls: ['./patrimonio.page.scss'],
})

export class PatrimonioPage implements OnInit {

  // env = environment;
  patrimonios: any[] = [];
  expanded = false;

  constructor(
    private patrimonioService: PatrimonioService
  ) {}

  ngOnInit() {
    this.patrimonioService.getPatrimonios()
    .subscribe(result => {
      this.patrimonios = result.data.patrimonios;
      // console.log('patrimonios', result);
      // console.log('patrimonios', this.patrimonios);
    });
  }

  expandHeader() {
    if (this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = !this.expanded;
    }
  }
}
