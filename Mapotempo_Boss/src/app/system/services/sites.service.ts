import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SiteI, Site } from '../models/site-i';

@Injectable({
  providedIn: 'root'
})
export class SitesService {
  sites: Array<SiteI>;
  departure:Array<any>=[];
  sites$: BehaviorSubject<SiteI[]> = new BehaviorSubject<SiteI[]>([]);

  constructor(private http: HttpClient) {
    this.sites = [new Site()]; // instanciation de la classe Site qui est dans l'interface siteI pour lui affecter les valeurs par défaut
    this.getSite();
  }
  getSite() {
    this.http.get<Array<SiteI>>(environment.apiURL + '/sites').subscribe(data => {
      this.sites = data;
      this.sites$.next(data)

    }, erreur => {
      console.log('erreur de chargement ici', erreur);

    });
  }


  
  getSiteId(id: number | string){
    for(let i in this.sites)
    console.log(i);
   
    

  }
  /**
   * J'Ã©cris un commentaire pour faire batailler Nawal !!!
   */
   filtreDeparture(){
     this.sites.filter(dep => {
       if(this.sites.length > 12 ){
         return this.sites;
       }
       // map / filter / reduce
     })
   }
}