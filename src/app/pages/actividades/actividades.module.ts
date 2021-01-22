import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ActividadesPageRoutingModule } from './actividades-routing.module';
import { ExpandableModule } from 'src/app/components/expandable/expandable.module';
import { ActividadesPage } from './actividades.page';
import { ActividadDetailComponent } from './actividad-detail/actividad-detail.component';
import { MapaComponent } from './mapa/mapa.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ActividadesPageRoutingModule,
    ExpandableModule
  ],
  declarations:  [
    ActividadesPage,
    ActividadDetailComponent,
    MapaComponent
   ]
})

export class ActividadesPageModule {}
