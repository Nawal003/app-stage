import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  /**
   * connexion d'un utilisateur
   */

   connecte: boolean = false;
   token:string;

  constructor() { 
    this.connecte=this.getConnexion();

  }
    /**
   * Récupérer la connexion si elle a été stockée
   */
  getConnexion() {
    if (sessionStorage.getItem('connexion')) {
      return JSON.parse(sessionStorage.getItem('connexion'))
    }
    return this.connecte;
  }

   /**
   * Stock l'enregistrement dans le local storage
   * @param log Un booléen pour dire s'il s'agit d'une connexion ou une déconnexion
   */
  stockConnexion(log:boolean){
  this.connecte=log;
  sessionStorage.setItem('connexion',JSON.stringify(log));  
  }
}
