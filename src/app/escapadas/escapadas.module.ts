import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscapadasPageRoutingModule } from './escapadas-routing.module';

import { EscapadasPage } from './escapadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscapadasPageRoutingModule
  ],
  declarations: [EscapadasPage]
})
export class EscapadasPageModule {}
