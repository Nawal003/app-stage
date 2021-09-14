import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MissionI } from '../models/mission-i';

//permet de l'injecter dans le constructor
@Injectable({
  providedIn: 'root'
})
export class MissionsService {
  missions:Array<MissionI>;
  missions$: BehaviorSubject<MissionI[]> = new BehaviorSubject<MissionI[]>([]);

  constructor(private http: HttpClient) { 
    this.missions = [];
    this.getMissions();

  }
  getMissions(){
    this.http.get<Array<MissionI>>(environment.apiURL + '/missions').subscribe(data=>{
      this.missions=data;
      // method next() de la classe observer qui permet la rééeciture des données dès changement constaté sans rechargement de la page
      this.missions$.next(data);
    }, erreur=>{
      console.log('erreur de chargement');
      
    })
  }
}
