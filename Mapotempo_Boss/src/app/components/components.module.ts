import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FilterBtnComponent } from '../filter-btn/filter-btn.component';




@NgModule({
  declarations: [NavBarComponent, FilterBtnComponent],
  imports: [
    CommonModule, 
    IonicModule
  ],
  exports:[NavBarComponent, FilterBtnComponent]
})
export class ComponentsModule { }
