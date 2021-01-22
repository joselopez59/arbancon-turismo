import { Component, OnInit } from '@angular/core';
import { GastronomiaService } from './gastronomia.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.page.html',
  styleUrls: ['./gastronomia.page.scss'],
})
export class GastronomiaPage implements OnInit {

  env = environment;
  public gastronomias;
  public expanded = false;

  constructor(
    public gastronomiaService: GastronomiaService
  ) { }

  ngOnInit() {

    this.gastronomiaService.getGastronomias()
    .subscribe(data => {
      this.gastronomias = data;
    });
  }

  expandHeader() {
    // console.log('expandHeader()');
    if (this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = !this.expanded;
    }
  }
}
