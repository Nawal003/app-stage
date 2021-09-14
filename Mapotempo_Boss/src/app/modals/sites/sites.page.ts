import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SitesService } from 'src/app/system/services/sites.service';
import { SiteI } from '../../system/models/site-i';
@Component({
  selector: 'app-sites',
  templateUrl: './sites.page.html',
  styleUrls: ['./sites.page.scss'],
})
export class SitesPage implements OnInit {

  sites: SiteI[] = [];
  // nom: string;
  

  constructor(public modalCtrl: ModalController, public sitesServ: SitesService) { }

  ngOnInit() {
    this.sites = this.sitesServ.sites$.getValue();
    // this.sitesServ.sites$.subscribe(data => {
    //   this.sites = data;


    // })

  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
