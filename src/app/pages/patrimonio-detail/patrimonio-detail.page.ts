import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatrimonioService } from './../../services/patrimonio.service';

@Component({
  selector: 'app-patrimonio-detail',
  templateUrl: './patrimonio-detail.page.html',
  styleUrls: ['./patrimonio-detail.page.scss'],
})
export class PatrimonioDetailPage implements OnInit {

  public patrimonio;

  constructor(
    private activatedRoute: ActivatedRoute,
    private patrimonioService: PatrimonioService
  ) { 
    this.patrimonio = "";
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id: " + id);
    this.patrimonioService.getPatrimonio(id)
      .subscribe(data => {
        this.patrimonio = data;
        console.log(this.patrimonio);
      });
  }

}
