import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PatrimonioPageRoutingModule } from './patrimonio-routing.module';
import { ExpandableModule } from 'src/app/components/expandable/expandable.module';
import { PatrimonioPage } from './patrimonio.page';
import { PatrimonioDetailComponent } from './patrimonio-detail/patrimonio-detail.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PatrimonioPageRoutingModule,
    ExpandableModule
  ],
  declarations: [
    PatrimonioPage,
    PatrimonioDetailComponent
   ]
})

export class PatrimonioPageModule {}
