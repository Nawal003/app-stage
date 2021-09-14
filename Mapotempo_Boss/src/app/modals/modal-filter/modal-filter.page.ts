import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { modalAnimation, leaveAnimation } from 'src/app/animations/modal-animation';
import { DatesPage } from '../dates/dates.page';
import { FrequencesPage } from '../frequences/frequences.page';
import { SitesPage } from '../sites/sites.page';
@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.page.html',
  styleUrls: ['./modal-filter.page.scss'],
})
export class ModalFilterPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  async siteModal() {

    const modal = await this.modalCtrl.create({
      component: SitesPage,
      enterAnimation: modalAnimation,
      leaveAnimation: leaveAnimation,
      showBackdrop: true,
      backdropDismiss: true,
      cssClass: 'modal'
    });
    await modal.present();
  }
  async dateModal() {

    const modal = await this.modalCtrl.create({
      component: DatesPage,
      enterAnimation: modalAnimation,
      leaveAnimation: leaveAnimation,
      showBackdrop: true,
      backdropDismiss: true,
      cssClass: 'modal'
    });

    await modal.present();
  }
  async freqModal() {

    const modal = await this.modalCtrl.create({
      component: FrequencesPage,
      enterAnimation: modalAnimation,
      leaveAnimation: leaveAnimation,
      showBackdrop: true,
      backdropDismiss: true,
      cssClass: 'modal'
    });

    await modal.present();
  }


}
