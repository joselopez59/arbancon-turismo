import { Component, OnInit } from '@angular/core';
import { PatrimonioService } from './../../services/patrimonio.service';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.page.html',
  styleUrls: ['./patrimonio.page.scss'],
})
export class PatrimonioPage implements OnInit {

  public patrimonios;
  constructor(
    private patrimonioService: PatrimonioService
  ) {}

  ngOnInit() {
    this.patrimonioService.getPatrimonios()
    .subscribe(data => {
      this.patrimonios = data;
      console.log("this.patrimonios: " + this.patrimonios);
    });
  }

}
