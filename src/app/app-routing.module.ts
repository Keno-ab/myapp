import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recupera',
    loadChildren: () => import('./recupera/recupera.module').then( m => m.RecuperaPageModule)
  },
  {
    path: 'crearcuenta',
    loadChildren: () => import('./crearcuenta/crearcuenta.module').then( m => m.CrearcuentaPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'disponible',
    loadChildren: () => import('./disponible/disponible.module').then( m => m.DisponiblePageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
