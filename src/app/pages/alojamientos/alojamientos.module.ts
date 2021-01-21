import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AlojamientosPageRoutingModule } from './alojamientos-routing.module';
import { ExpandableModule } from 'src/app/components/expandable/expandable.module';
import { AlojamientosPage } from './alojamientos.page';
import { EscapadasComponent } from './escapadas/escapadas.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AlojamientosPageRoutingModule,
    ExpandableModule
  ],
  declarations: [
    AlojamientosPage,
    EscapadasComponent
  ]
})

export class AlojamientosPageModule {}
