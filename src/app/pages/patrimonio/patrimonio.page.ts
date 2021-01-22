import { Component, OnInit } from '@angular/core';

import { PatrimonioService } from './patrimonio.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.page.html',
  styleUrls: ['./patrimonio.page.scss'],
})

export class PatrimonioPage implements OnInit {

  env = environment;
  public patrimonios;
  public expanded = false;

  constructor(
    public patrimonioService: PatrimonioService
  ) {}

  ngOnInit() {
    this.patrimonioService.getPatrimonios()
    .subscribe(data => {
      this.patrimonios = data;
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
