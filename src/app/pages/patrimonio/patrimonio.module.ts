import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatrimonioPageRoutingModule } from './patrimonio-routing.module';

import { PatrimonioPage } from './patrimonio.page';
import { ExpandableComponent } from './../../components/expandable/expandable.component';

@NgModule({
  imports: [
  
  CommonModule,
    FormsModule,
    IonicModule,
    PatrimonioPageRoutingModule
  ],
  declarations: [PatrimonioPage, ExpandableComponent]
})

export class PatrimonioPageModule {}
