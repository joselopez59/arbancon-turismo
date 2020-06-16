import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlojamientosPageRoutingModule } from './alojamientos-routing.module';

import { AlojamientosPage } from './alojamientos.page';
import { ExpandableComponent } from './../../components/expandable/expandable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlojamientosPageRoutingModule
  ],
  declarations: [AlojamientosPage, ExpandableComponent]
})

export class AlojamientosPageModule {}
