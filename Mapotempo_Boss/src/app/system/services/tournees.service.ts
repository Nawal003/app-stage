import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tournee, TourneeI } from '../models/tournee-i';
@Injectable({
  providedIn: 'root'
})
export class TourneesService {
  tournees:Array<TourneeI>;
  tournees$: BehaviorSubject<TourneeI[]> = new BehaviorSubject<TourneeI[]>([]);

  constructor(private http: HttpClient) { 
    this.tournees=[new Tournee()];
    this.getTournees();
  }
  getTournees(){
    this.http.get<Array<TourneeI>>(environment.apiURL + '/tournees').subscribe(data=>{
      this.tournees=data;
      this.tournees$.next(data)

    }, erreur =>{
      console.log('erreur de chargement');
      
    });
  }
}
