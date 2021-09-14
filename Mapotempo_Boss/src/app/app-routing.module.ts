import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'filtres',
    loadChildren: () => import('./filtres/filtres.module').then( m => m.FiltresPageModule)
  },
  {
    path: 'modal-filter',
    loadChildren: () => import('./modals/modal-filter/modal-filter.module').then( m => m.ModalFilterPageModule)
  },
  {
    path: 'sites',
    loadChildren: () => import('./modals/sites/sites.module').then( m => m.SitesPageModule)
  },
  {
    path: 'dates',
    loadChildren: () => import('./modals/dates/dates.module').then( m => m.DatesPageModule)
  },
  {
    path: 'frequences',
    loadChildren: () => import('./modals/frequences/frequences.module').then( m => m.FrequencesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
