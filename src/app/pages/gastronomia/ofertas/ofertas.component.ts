import { Component, OnInit } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { GastronomiaService } from '../gastronomia.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
})
export class OfertasComponent implements OnInit {

  env = environment;
  public expanded = false;
  public ofertas: any = '';

  constructor(
    private ofertasService: GastronomiaService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertas()
      .subscribe( data => {
        this.ofertas = data;
        // console.log(data.imagen.url);
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
