import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { ActividadDetailComponent } from './pages/actividades/actividad-detail/actividad-detail.component';
// import { ActividadesPage } from './pages/actividades/actividades.page';
import { MapaComponent } from './pages/actividades/mapa/mapa.component';
// import { AlojamientoDetailComponent } from './pages/alojamientos/alojamiento-detail/alojamiento-detail.component';
// import { AlojamientosPage } from './pages/alojamientos/alojamientos.page';
import { EscapadasComponent } from './pages/alojamientos/escapadas/escapadas.component';
import { CalendarPage } from './pages/eventos/calendar/calendar.page';

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
  // {
  //   path: 'alojamientos',
  //   component: AlojamientosPage
  // },
  // {
  //   path: 'alojamiento/:id',
  //   component: AlojamientoDetailComponent
  // },
  {
    path: 'escapadas',
    component: EscapadasComponent
  },
  {
    path: 'gastronomia',
    loadChildren: () => import('./pages/gastronomia/gastronomia.module').then( m => m.GastronomiaPageModule)
  },
  {
    path: 'patrimonio',
    loadChildren: () => import('./pages/patrimonio/patrimonio.module').then( m => m.PatrimonioPageModule)
  },
  {
    path: 'actividades',
    loadChildren: () => import('./pages/actividades/actividades.module').then( m => m.ActividadesPageModule)
  },
  // {
  //   path: 'actividades',
  //   component: ActividadesPage
  // },
  // {
  //   path: 'actividad/:id',
  //   component: ActividadDetailComponent
  // },
  {
    path: 'mapa',
    component: MapaComponent
  },
  {
    path: 'eventos',
    loadChildren: () => import('./pages/eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'calendario',
    component: CalendarPage
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
