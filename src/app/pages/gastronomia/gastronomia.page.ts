import { Component, OnInit } from '@angular/core';
import { GastronomiaService } from './../../services/gastronomia.service';

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.page.html',
  styleUrls: ['./gastronomia.page.scss'],
})
export class GastronomiaPage implements OnInit {

  public gastronomias;
  
  constructor(
    public gastronomiaService: GastronomiaService
  ) { }

  ngOnInit() {

    this.gastronomiaService.getGastronomias()
    .subscribe(data => {
      this.gastronomias = data;
    });
  }
}
