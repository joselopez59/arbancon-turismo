import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatrimonioDetailPageRoutingModule } from './patrimonio-detail-routing.module';

import { PatrimonioDetailPage } from './patrimonio-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatrimonioDetailPageRoutingModule
  ],
  declarations: [PatrimonioDetailPage]
})
export class PatrimonioDetailPageModule {}
