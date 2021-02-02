import { Component, OnInit } from '@angular/core';
import { EscapadasService } from 'src/app/pages/alojamientos/escapadas.service';
@Component({
  selector: 'app-escapadas',
  templateUrl: './escapadas.component.html',
  styleUrls: ['./escapadas.component.scss'],
})
export class EscapadasComponent implements OnInit {

  escapadas: any[] = [];
  expanded = false;

  constructor( private escapadasService: EscapadasService ) { }

  ngOnInit() {
    this.escapadasService.getEscapadas()
    .subscribe(result => {
      this.escapadas = result.data.escapadas;
    });
  }

  expandHeader() {
    if (this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = !this.expanded;
    }
  }

}
