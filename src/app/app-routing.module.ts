import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    loadChildren: () => import('./pages/alojamiento/alojamiento.module').then( m => m.AlojamientoPageModule)
  },
  {
    path: 'escapadas',
    loadChildren: () => import('./pages/escapadas/escapadas.module').then( m => m.EscapadasPageModule)
  },
  {
    path: 'gastronomia',
    loadChildren: () => import('./pages/gastronomia/gastronomia.module').then( m => m.GastronomiaPageModule)
  },
  {
    path: 'gastronomia/:id',
    loadChildren: () => import('./pages/gastronomia-detail/gastronomia-detail.module').then( m => m.GastronomiaDetailPageModule)
  },
  {
    path: 'patrimonio',
    loadChildren: () => import('./pages/patrimonio/patrimonio.module').then( m => m.PatrimonioPageModule)
  },
  {
    path: 'actividades',
    loadChildren: () => import('./pages/actividades/actividades.module').then( m => m.ActividadesPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./pages/eventos/eventos.module').then( m => m.EventosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
