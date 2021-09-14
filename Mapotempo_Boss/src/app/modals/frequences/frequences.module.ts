import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrequencesPageRoutingModule } from './frequences-routing.module';

import { FrequencesPage } from './frequences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrequencesPageRoutingModule
  ],
  declarations: [FrequencesPage]
})
export class FrequencesPageModule {}
