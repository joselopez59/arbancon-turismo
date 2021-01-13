import { Component, OnInit } from '@angular/core';

import { EscapadasService } from '../../services/escapadas.service';
import { environment } from '../../../environments/environment';
import { sortEventSegs } from '@fullcalendar/core';

@Component({
  selector: 'app-escapadas',
  templateUrl: './escapadas.page.html',
  styleUrls: ['./escapadas.page.scss'],
})

export class EscapadasPage implements OnInit {

  env = environment;
  public escapadas: any = '';
  public expanded = false;

  constructor(
    private escapadasService: EscapadasService
  ) {}

  ngOnInit() {
    this.escapadasService.getEscapadas()
    .subscribe(data => {
      // this.escapadas = data;
      // console.log('this.escapadas: ' + this.escapadas);
      this.sortData(data);
    });
  }

  sortData(escapada: any) {
    // console.log('sortData', escapada);
    this.escapadas = escapada.sort((n1, n2) => {
      if (n1.order > n2.order) {
        return 1;
      }
      if (n1.order < n2.order) {
          return -1;
      }
      return 0;
    });
    console.log(this.escapadas);
  }

  expandHeader() {
    if (this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = !this.expanded;
    }
  }
}
