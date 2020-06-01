import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlojamientoDetailPageRoutingModule } from './alojamiento-detail-routing.module';

import { AlojamientoDetailPage } from './alojamiento-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlojamientoDetailPageRoutingModule
  ],
  declarations: [AlojamientoDetailPage]
})
export class AlojamientoDetailPageModule {}
