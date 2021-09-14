import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltresPage } from './filtres.page';

const routes: Routes = [
  {
    path: '',
    component: FiltresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltresPageRoutingModule {}
