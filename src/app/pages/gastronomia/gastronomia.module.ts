import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastronomiaPageRoutingModule } from './gastronomia-routing.module';

import { GastronomiaPage } from './gastronomia.page';
import { ExpandableComponent } from './../../components/expandable/expandable.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { GastronomiaDetailPage } from '../gastronomia-detail/gastronomia-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastronomiaPageRoutingModule
  ],
  declarations: [
    GastronomiaPage,
    GastronomiaDetailPage,
    OfertasComponent,
    ExpandableComponent
  ]
})
export class GastronomiaPageModule {}
