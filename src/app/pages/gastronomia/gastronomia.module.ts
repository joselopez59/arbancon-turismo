import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastronomiaPageRoutingModule } from './gastronomia-routing.module';

import { GastronomiaPage } from './gastronomia.page';
import { ExpandableComponent } from './../../components/expandable/expandable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastronomiaPageRoutingModule
  ],
  declarations: [GastronomiaPage, ExpandableComponent]
})
export class GastronomiaPageModule {}
