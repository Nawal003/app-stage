import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFilterPage } from '../modals/modal-filter/modal-filter.page';


@Component({
  selector: 'app-filter-btn',
  templateUrl: './filter-btn.component.html',
  styleUrls: ['./filter-btn.component.scss'],
})
export class FilterBtnComponent implements OnInit {

  //injection du ModalControllar pour créer un modal
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

    //permet d'appeler la page avec tous les filtres, en appuyant sur le bouton filtrer
  async presentModal() {
    
    const modal = await this.modalCtrl.create({
      component: ModalFilterPage,
      showBackdrop: true,
      backdropDismiss: true,
      cssClass: 'filter'
    });

    await modal.present();
  }

}
