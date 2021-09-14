import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../system/services/auth.service';
import { ConnexionService } from '../system/services/connexion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  submitted = false;
  loading = false;

  constructor( private router: Router, public authServ: AuthService,
    public connexionServ: ConnexionService, private http: HttpClient) {

  }

  ngOnInit() { }

  
  login(email, password) {
    this.submitted = true;
    this.loading = true;

    this.authServ.login(email, password)
      .pipe(first())
      .subscribe(data => {
        this.router.navigate(['/home']);
      }, error => {
        console.log("il y a une erreur", error);

        this.loading = false;

      })
  }


}
