import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscapadasPageRoutingModule } from './escapadas-routing.module';

import { EscapadasPage } from './escapadas.page';
import { ExpandableComponent } from './../../components/expandable/expandable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscapadasPageRoutingModule
  ],
  declarations: [EscapadasPage,
    // ExpandableComponent
  ]
})

export class EscapadasPageModule {}
