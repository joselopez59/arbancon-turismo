import { Component, OnInit } from '@angular/core';
import { ActividadesService } from './../../services/actividades.service';
import { throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

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
      // this.headerTitle = data[0].categoria;
      // console.log(this.headerTitle);
      // this.headerText = data[0].text;
      // console.log(this.headerText);
      this.actividades = data;
      //console.log("this.actividades", this.actividades);
      //console.log("this.actividades.categoria", this.actividades.categoria);
    });  
    
    // this.actividadesService.getCategoria()
    // .subscribe(data => {
    //   this.header = data;
    //   console.log(this.header);
    // });  

  
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
