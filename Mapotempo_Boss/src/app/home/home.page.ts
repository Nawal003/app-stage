import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import { SiteI } from '../system/models/site-i';
import { SitesService } from '../system/services/sites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit, OnInit {
  
  /**
   * A callback method that is invoked immediately after Angular
  has completed initialization of a component's view. 
  It is invoked only once when the view is instantiated.
   * 
   */

  //ViewChild permet d'accéder aux éléments DOM natifs qui ont une variable de référence de modèle.
  @ViewChild('departures') departures: ElementRef;
  @ViewChild('missions') missions: ElementRef;
  @ViewChild('arrivals') arrivals: ElementRef;

  private departuresChart: Chart
  private missionsChart: Chart
  private arrivalsChart: Chart



  sites: SiteI[] = []; //interface Site
  nom: string; //nom du site

  //injection du service sitesService 
  constructor(public sitesServ: SitesService, private router: Router) {

  }
  ngOnInit() {
    // this.sites = this.sitesServ.sites$.getValue();
    this.sitesServ.sites$.subscribe(data => {
      this.sites = data;
      
    })
  }

  //après initialisation d'angular, les graphiques s'affiche sur la page d'accueil
  ngAfterViewInit() {
    const responsiveFont = window.innerWidth / 34;
    Chart.defaults.font.size = responsiveFont;
    this.departuresMethod();
    this.missionsMethod();
    this.arrivalsMethod();
  }

  //methode pour creer des doughnuts

  departuresMethod() {
    this.departuresChart = new Chart(this.departures.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Fait'],
        datasets: [{
          label: '# of Votes',
          data:[100],
          backgroundColor: [
            '#138346'


          ],
          hoverOffset: 4,
          borderWidth: 0
        }]
      },
      options: {
        layout: {
          padding: {
            right: 15
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Departures statuses'
          },
          legend: {
            display: true,
            position: 'right',
            labels: {
              boxWidth: window.innerWidth / 34,
              boxHeight: window.innerWidth / 34,
              color: '#00000090'

            }
          }
        }

      },

    });
  }



  //methode pour creer un doughnut

  missionsMethod() {
    this.missionsChart = new Chart(this.missions.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Fait', 'Non fait', 'En cours', 'À faire'],
        datasets: [{
          data: [32, 8, 10, 50],
          backgroundColor: [
            '#138346',
            '#BD1D1D',
            '#FFB904',
            '#1686C5',

          ],
          hoverOffset: 4,
          borderWidth: 0
        }]
      },
      options: {
        layout: {
          padding: {
            left: 10
          }

        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Missions statuses'
          },
          legend: {
            display: true,

            position: 'right',
            labels: {
              boxWidth: window.innerWidth / 34,
              boxHeight: window.innerWidth / 34,
              color: '#00000090'
            }
          }
        }

      },

    });
  }



  arrivalsMethod() {
    this.arrivalsChart = new Chart(this.arrivals.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['À faire'],
        datasets: [{
          data: [100],
          backgroundColor: [
            '#1686C5'

          ],
          hoverOffset: 4,
          borderWidth: 0
        }]
      },
      options: {
        layout: {
          padding: {
            left: 10
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Arrivals statuses'
          },
          legend: {
            display: true,

            position: 'right',
            labels: {
              boxWidth: window.innerWidth / 34,
              boxHeight: window.innerWidth / 34,
              color: '#00000090'

            }
          }
        }

      },

    });
  }

}
