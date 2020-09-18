import { Component, OnInit } from '@angular/core';
import { ActividadesService } from './../../services/actividades.service';
import { throwIfEmpty } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})

export class ActividadesPage implements OnInit {

  env = environment;

  public expanded = false;
  // public headerTitle;
  // public headerText;
  public actividades;

  constructor(
    private actividadesService: ActividadesService
  ) { }

  ngOnInit() {
    //console.log("ngOnInit()");
    this.actividadesService.getactividades()
    .subscribe(data => {
      this.actividades = data;
      //console.log("this.actividades", this.actividades);
    });  
  }

  expandHeader() {
    console.log("expandHeader()");
    if (this.expanded) {
      this.expanded = false;
    } else {    
      this.expanded = !this.expanded;   
    }
  }
}
