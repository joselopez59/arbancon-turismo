import { Component, OnInit } from '@angular/core';
import { PatrimonioService } from './../../services/patrimonio.service';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.page.html',
  styleUrls: ['./patrimonio.page.scss'],
})

export class PatrimonioPage implements OnInit {

  public patrimonios;
  public expanded = false;

  constructor(
    private patrimonioService: PatrimonioService
  ) {}

  expandHeader() {
    console.log("expandHeader()");
    if (this.expanded) {
      this.expanded = false;
    } else {    
      this.expanded = !this.expanded;   
    }
  }

  scroll(event) {
    //console.log('scroll event detail', event.detail);
    //console.log('scroll event scrollTop', event.detail.scrollTop);
  }

  ngOnInit() {
    this.patrimonioService.getPatrimonios()
    .subscribe(data => {
      this.patrimonios = data;
      //console.log("this.patrimonios: " + this.patrimonios);
    });
  }


// export class PatrimonioPage implements OnInit {

//   public patrimonios;
//   constructor(
//     private patrimonioService: PatrimonioService
//   ) {}

//   ngOnInit() {
//     this.patrimonioService.getPatrimonios()
//     .subscribe(data => {
//       this.patrimonios = data;
//       console.log("this.patrimonios: " + this.patrimonios);
//     });
//   }

}
