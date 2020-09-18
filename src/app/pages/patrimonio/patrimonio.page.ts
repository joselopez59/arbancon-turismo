import { Component, OnInit } from '@angular/core';

import { PatrimonioService } from './../../services/patrimonio.service';
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

  // scroll(event) {
  //   //console.log('scroll event detail', event.detail);
  //   //console.log('scroll event scrollTop', event.detail.scrollTop);
  // }

  ngOnInit() {
    this.patrimonioService.getPatrimonios()
    .subscribe(data => {
      this.patrimonios = data;
      //console.log("this.patrimonios: ", this.patrimonios);
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
