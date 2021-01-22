import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ActividadDetailComponent } from './pages/actividades/actividad-detail/actividad-detail.component';
import { AlojamientoDetailComponent } from './pages/alojamientos/alojamiento-detail/alojamiento-detail.component';
import { GastronomiaDetailComponent } from './pages/gastronomia/gastronomia-detail/gastronomia-detail.component';
import { PatrimonioDetailComponent } from './pages/patrimonio/patrimonio-detail/patrimonio-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'alojamientos',
    loadChildren: () => import('./pages/alojamientos/alojamientos.module').then( m => m.AlojamientosPageModule)
  },
  {
    path: 'alojamiento/:id',
    component: AlojamientoDetailComponent
  },
  {
    path: 'gastronomia',
    loadChildren: () => import('./pages/gastronomia/gastronomia.module').then( m => m.GastronomiaPageModule)
  },
  {
    path: 'gastronomia/:id',
    component: GastronomiaDetailComponent
  },
  {
    path: 'patrimonio',
    loadChildren: () => import('./pages/patrimonio/patrimonio.module').then( m => m.PatrimonioPageModule)
  },
  {
    path: 'patrimonio/:id',
    component: PatrimonioDetailComponent
  },
  {
    path: 'actividades',
    loadChildren: () => import('./pages/actividades/actividades.module').then( m => m.ActividadesPageModule)
  },
  {
    path: 'actividad/:id',
    component: ActividadDetailComponent
  },
  {
    path: 'eventos',
    loadChildren: () => import('./pages/eventos/eventos.module').then( m => m.EventosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
