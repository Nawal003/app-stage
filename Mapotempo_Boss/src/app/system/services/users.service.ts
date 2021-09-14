import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserI } from '../models/user-i';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Array<UserI>;
  users$:BehaviorSubject<UserI[]> = new BehaviorSubject<UserI[]>([]);

  constructor(private http: HttpClient, authServ:AuthService) {
    this.users=[];
    this.getUser();
  }

  getUser(){
    this.http.get<Array<UserI>>(environment.apiURL + '/users').subscribe(data=>{
      this.users=data;
      this.users$.next(data);
    }, erreur=>{
      console.log('erreur de chargement', erreur);
      
    })
  }
}
