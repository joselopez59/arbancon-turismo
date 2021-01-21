import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PatrimonioPageRoutingModule } from './patrimonio-routing.module';
import { ExpandableModule } from 'src/app/components/expandable/expandable.module';
import { PatrimonioPage } from './patrimonio.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PatrimonioPageRoutingModule,
    ExpandableModule
  ],
  declarations: [ PatrimonioPage ]
})

export class PatrimonioPageModule {}
