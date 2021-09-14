import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltresPageRoutingModule } from './filtres-routing.module';

import { FiltresPage } from './filtres.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltresPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FiltresPage]
})
export class FiltresPageModule {}
