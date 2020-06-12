import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GastronomiaService } from './../../services/gastronomia.service';


@Component({
  selector: 'app-gastronomia-detail',
  templateUrl: './gastronomia-detail.page.html',
  styleUrls: ['./gastronomia-detail.page.scss'],
})
export class GastronomiaDetailPage implements OnInit {

  public gastronomia;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gastronomiaService: GastronomiaService
  ) {
    this.gastronomia = "";
   }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.gastronomiaService.getGastronomia(id)
    .subscribe(data => {
      this.gastronomia = data;
      console.log(this.gastronomia);
    });
  }

}
