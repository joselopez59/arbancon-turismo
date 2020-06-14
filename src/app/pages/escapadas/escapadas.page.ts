import { Component, OnInit } from '@angular/core';
import { EscapadasService } from '../../services/escapadas.service';

@Component({
  selector: 'app-escapadas',
  templateUrl: './escapadas.page.html',
  styleUrls: ['./escapadas.page.scss'],
})

export class EscapadasPage implements OnInit {

  public escapadas;

  constructor(
    private escapadasService: EscapadasService
  ) {}

  ngOnInit() {
    this.escapadasService.getEscapadas()
    .subscribe(data => {
      this.escapadas = data;
      console.log("this.escapadas: " + this.escapadas);
    });
  }
}