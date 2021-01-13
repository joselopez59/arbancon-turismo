import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})

export class OfertasPage implements OnInit {

  env = environment;
  public expanded = false;

  constructor() { }

  ngOnInit() {
  }

  expandHeader() {
    if (this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = !this.expanded;
    }
  }

}
