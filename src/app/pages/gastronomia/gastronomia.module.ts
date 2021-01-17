import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastronomiaPageRoutingModule } from './gastronomia-routing.module';

import { GastronomiaPage } from './gastronomia.page';
import { ExpandableComponent } from './../../components/expandable/expandable.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { GastronomiaDetailComponent } from './gastronomia-detail/gastronomia-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastronomiaPageRoutingModule
  ],
  declarations: [
    GastronomiaPage,
    GastronomiaDetailComponent,
    OfertasComponent,
    ExpandableComponent
  ]
})
export class GastronomiaPageModule {}
