import { Component, OnInit } from '@angular/core';
import { EscapadasService } from '../../services/escapadas.service';

@Component({
  selector: 'app-escapadas',
  templateUrl: './escapadas.page.html',
  styleUrls: ['./escapadas.page.scss'],
})

export class EscapadasPage implements OnInit {

  public escapadas;
  public expanded = false;

  constructor(
    private escapadasService: EscapadasService
  ) {
    this.escapadas = "";
  }

  ngOnInit() {
    this.escapadasService.getEscapadas()
    .subscribe(data => {
      this.escapadas = data;
      //console.log("this.escapadas: " + this.escapadas);
    });
  }

  expandHeader() {
    //console.log("expandHeader()");
    if (this.expanded) {
      this.expanded = false;
    } else {    
      this.expanded = !this.expanded;   
    }
  }
}