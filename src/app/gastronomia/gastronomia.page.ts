import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GastronomiaService } from './../services/gastronomia.service';

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.page.html',
  styleUrls: ['./gastronomia.page.scss'],
})

export class GastronomiaPage implements OnInit {

gastronomia: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gastronimiaService: GastronomiaService
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    //this. gastronomia = this.gastronimiaService.getGastronomia(id);
  }

}
