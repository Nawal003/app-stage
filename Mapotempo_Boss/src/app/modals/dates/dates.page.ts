import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-dates',
  templateUrl: './dates.page.html',
  styleUrls: ['./dates.page.scss'],
})
export class DatesPage implements OnInit {
  customDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  customMonths = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  customPickerOptions: any;
  
  constructor(public modalCtrl: ModalController) { 
    this.customPickerOptions = {
      buttons: [{
        text: 'Annuler',
       
        handler: () => {
         console.log('Clicked Log. Do not Dismiss.');
          // return false;
        },
      }, {
        text: 'Valider',
        handler: () => console.log('Clicked Save!')
        
        
      }]
    }
  }
  

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
