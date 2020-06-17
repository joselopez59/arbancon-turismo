import { Component, OnInit } from '@angular/core';
import { AlojamientosService } from './../../services/alojamientos.service';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.page.html',
  styleUrls: ['./alojamientos.page.scss'],
})

export class AlojamientosPage implements OnInit {

  public alojamientos;
  public expanded = false;
  
  constructor(
    public alojamientosService: AlojamientosService
  ) {}

  expandHeader() {
    //console.log("expandHeader()");
    if (this.expanded) {
      this.expanded = false;
    } else {    
      this.expanded = !this.expanded;   
    }
  }

  ngOnInit() {
    this.alojamientosService.getAlojamientos()
    .subscribe(data => {
      this.alojamientos = data;
      //console.log(this.alojamientos);
    });   
  }
}
