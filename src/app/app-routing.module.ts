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

  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  

  
  // {
  //   path: 'alojamientos',
  //   loadChildren: () => import('./alojamientos/alojamientos.module').then( m => m.AlojamientosPageModule)
  // },
  {
    path: 'alojamientos',
    loadChildren: () => import('./pages/alojamientos/alojamientos.module').then( m => m.AlojamientosPageModule)
  },
  {
    path: 'alojamiento/:id',
    loadChildren: () => import('./pages/alojamiento/alojamiento.module').then( m => m.AlojamientoPageModule)
  },
  {
    path: 'gastronomia',
    loadChildren: () => import('./pages/gastronomia/gastronomia.module').then( m => m.GastronomiaPageModule)
  },
  {
    path: 'gastronomia/:id',
    loadChildren: () => import('./pages/gastronomia-detail/gastronomia-detail.module').then( m => m.GastronomiaDetailPageModule)
  },
  // {
  //   path: 'alojamiento-detail/:id',
  //   loadChildren: () => import('./alojamiento-detail/alojamiento-detail.module').then( m => m.AlojamientoDetailPageModule)
  // },
  {
    path: 'escapadas',
    loadChildren: () => import('./escapadas/escapadas.module').then( m => m.EscapadasPageModule)
  },
  // {
  //   path: 'gastronomia/:id',
  //   loadChildren: () => import('./gastronomia/gastronomia.module').then( m => m.GastronomiaPageModule)
  // },
  {
    path: 'patrimonio',
    loadChildren: () => import('./patrimonio/patrimonio.module').then( m => m.PatrimonioPageModule)
  },
  {
    path: 'gastronomia',
    loadChildren: () => import('./pages/gastronomia/gastronomia.module').then( m => m.GastronomiaPageModule)
  },

  

  
  

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
