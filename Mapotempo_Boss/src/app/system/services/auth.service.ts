import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserI } from '../models/user-i';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: UserI;
  authToken: string;
  /**
   * Behavior Subjects are another cool thing about
   *  subjects. When you subscribe to a behavior subject, 
   * it will give you the last emitted value right away.
   */
  private currentUserSubject: BehaviorSubject<UserI>;
  public currentUser: Observable<UserI>


  constructor(private http: HttpClient, public router: Router) {
    this.currentUserSubject = new BehaviorSubject<UserI>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    
 

    if (sessionStorage.getItem('currentUser')) {
      this.userData = JSON.parse(sessionStorage.getItem('currentUser'));
      this.authToken = sessionStorage.getItem('currentJwt');
    }
  }
  /**
   * connexion avec l'email et le mot de passe
   */
  login(email, password) {
    return this.http.post<any>(environment.apiURL + '/auth/local', { identifier: email, password: password })
      .pipe(map(response => {
        //login success if jwt token in the response 
        if (response.jwt && response.user && response.user.blocked == false) {

          //stock les détails de l'utilisateur et le token dans la session pour le garder connecté

          // sessionStorage.setItem('currentUser', JSON.stringify(response.user));
          sessionStorage.setItem('currentJwt', response.jwt);
          this.userData = response.user;
          this.authToken = sessionStorage.getItem('currentJwt');
          this.currentUserSubject.next(response.user)
        }
        return response.user

      }))

  }
  logout() {
    //Retire l'utilisateur de la session
    // sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentJwt');
    this.currentUserSubject.next(null);
    this.router.navigate(["/login"])
  }


}
