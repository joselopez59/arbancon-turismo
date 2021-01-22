import { Component, OnInit } from '@angular/core';
import { EscapadasService } from 'src/app/pages/alojamientos/escapadas.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-escapadas',
  templateUrl: './escapadas.component.html',
  styleUrls: ['./escapadas.component.scss'],
})
export class EscapadasComponent implements OnInit {

  env = environment;
  escapadas: any = '';
  expanded = false;

  constructor( private escapadasService: EscapadasService ) { }

  ngOnInit() {
    this.escapadasService.getEscapadas()
    .subscribe(data => {
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
    // console.log(this.escapadas);
  }

  expandHeader() {
    if (this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = !this.expanded;
    }
  }

}
