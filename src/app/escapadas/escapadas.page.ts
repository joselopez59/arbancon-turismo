import { Component, OnInit } from '@angular/core';
import { EscapadasService } from '../services/escapadas.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-escapadas',
  templateUrl: './escapadas.page.html',
  styleUrls: ['./escapadas.page.scss'],
})
export class EscapadasPage implements OnInit {

public escapadas: [];

  constructor(
    public escapadasService: EscapadasService
  ) {
      this.escapadas = this.escapadasService.getEscapadas();
      console.log(this.escapadas);
   }

  ngOnInit() {
  }

}
