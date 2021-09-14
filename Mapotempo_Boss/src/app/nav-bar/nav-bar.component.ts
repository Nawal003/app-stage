import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { Router} from '@angular/router';
import { TourneeI } from '../system/models/tournee-i';
import { ConnexionService } from '../system/services/connexion.service';
import { AuthService } from '../system/services/auth.service';
import { DatePipe } from "@angular/common";


@Component({
  selector: "app-nav-bar",
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers:[DatePipe]
})
export class NavBarComponent implements OnInit {
 
  date=new Date();

  constructor(private navCtrl: NavController, private router: Router, public authServ: AuthService) { }

  ngOnInit() {
    
    
  

  }
  Home() {
    //code for login
    this.navCtrl.navigateForward(['/home'])
  }
  leave() {
    // this.navCtrl.navigateBack(['/login'])
    this.authServ.logout();
  }

}
