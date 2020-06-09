import { Component, OnInit } from '@angular/core';
import { EscapadasService } from '../services/escapadas.service';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.page.html',
  styleUrls: ['./patrimonio.page.scss'],
})

export class PatrimonioPage implements OnInit {

  public escapadas: [];

  constructor(
    public escapadasService: EscapadasService
  ) {
    
   }

  ngOnInit() {
    this.escapadas = this.escapadasService.getEscapadas();
    console.log(this.escapadas);
  }

}
