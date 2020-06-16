import { Component, OnInit } from '@angular/core';
import { AlojamientosService } from './../../services/alojamientos.service';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.page.html',
  styleUrls: ['./alojamientos.page.scss'],
})

export class AlojamientosPage implements OnInit {

  public alojamientos;
  public items: any = [];
  
  constructor(
    public alojamientosService: AlojamientosService
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
    this.alojamientosService.getAlojamientos()
    .subscribe(data => {
      this.alojamientos = data;
      //console.log(this.alojamientos);
    });   
  }
}
