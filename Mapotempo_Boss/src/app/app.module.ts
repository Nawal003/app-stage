import { NgModule } from '@angular/core';
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
registerLocaleData(localeFr, 'fr');
import { LOCALE_ID } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SitesService } from './system/services/sites.service';
import { HttpClientModule } from '@angular/common/http';
import { MissionsService } from './system/services/missions.service';
import { UsersService } from './system/services/users.service';
import { TourneesService } from './system/services/tournees.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './system/services/auth.service';
import { ConnexionService } from './system/services/connexion.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    { provide: LOCALE_ID, useValue: "fr-FR" }, 
    SitesService, MissionsService, UsersService, 
    TourneesService,AuthService, ConnexionService],
  bootstrap: [AppComponent],
})
export class AppModule { }
