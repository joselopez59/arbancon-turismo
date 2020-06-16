import { Component, OnInit } from '@angular/core';
import { PatrimonioService } from './../../services/patrimonio.service';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.page.html',
  styleUrls: ['./patrimonio.page.scss'],
})

export class PatrimonioPage implements OnInit {

  public patrimonios;
  public items: any = [];

  constructor(
    private patrimonioService: PatrimonioService
  ) {
    this.items  = [
      { expanded: false }
    ];
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  ngOnInit() {
    this.patrimonioService.getPatrimonios()
    .subscribe(data => {
      this.patrimonios = data;
      console.log("this.patrimonios: " + this.patrimonios);
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
