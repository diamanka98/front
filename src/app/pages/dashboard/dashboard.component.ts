import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import Chart from 'chart.js';
import { AchatService } from '../../service/achat.service';
import { AlimentationService } from '../../service/alimentation.service';
import { DepensesService } from '../../service/depenses.service';
import { FinanceService } from '../../service/finance.service';
import { MaladieService } from '../../service/maladie.service';
import { ProductionService } from '../../service/production.service';
import { UtilisateurService } from '../../service/utilisateur.service';
import { VenteService } from '../../service/vente.service';
import { User } from '../../_models/User';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./black-dashboard.scss'],
  // styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements AfterViewInit, OnInit, OnDestroy {
  public canvas: any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;

  somme: any;
  fermiers: User[] = []
  themeSubscription: any;
  constructor(private theme: NbThemeService, private vte: VenteService,
    private prod: ProductionService,
    private al: AlimentationService,
    private ach: AchatService,
    private dep: DepensesService,
    private mal: MaladieService,
    private fn: FinanceService,
    private us: UtilisateurService) { }

  ngAfterViewInit(): void {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.ngOnInit();
    })
  }
  ngOnInit() {
    this.us.getFerme().subscribe(res => {
      this.fermiers = res;
      // console.log(this.fermiers)
    })

    var gradientChartOptionsConfigurationWithTooltipBlue: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#2380f7"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipPurple: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipRed: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(233,32,16,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipOrange: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 110,
            padding: 20,
            fontColor: "#ff8a76"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipGreen: any = {
      maintainAspectRatio: false,
      legend: {
        display: true,
        backgroundColor: '#f5f5f5',

      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        // yAxes: [{
        //   barPercentage: 1.6,
        //   gridLines: {
        //     drawBorder: false,
        //     color: 'rgba(29,140,248,0.0)',
        //     zeroLineColor: "transparent",
        //   },
        //   ticks: {
        //     suggestedMin: 50,
        //     suggestedMax: 125,
        //     padding: 20,
        //     fontColor: "#9e9e9e"
        //   }
        // }],

        // xAxes: [{
        //   barPercentage: 1.6,
        //   gridLines: {
        //     drawBorder: false,
        //     color: 'rgba(0,242,195,0.1)',
        //     zeroLineColor: "transparent",
        //   },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        // }]
      }
    };


    var gradientBarChartConfiguration: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };

  




    var chart_labels = ['JANVIER', 'FEVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN', 'JUILLET', 'AOUT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DECEMBRE'];
    this.vte.getVenteLaitMensuelle().subscribe(res => {
      const somme = res['2021'].map(res => res.vente)

      this.prod.getProductionLait().subscribe(res => {
        const total = res['2021'].map(res => res.total)
        this.prod.getProductionvendu().subscribe(res => {
          const vendu = res['2021'].map(res => res.montant)
          this.datasets = [
            somme,
            total,
            vendu
          ];
          this.data = this.datasets[0];
        })
      })
    })


    this.canvas = document.getElementById("chartBig1");
    this.ctx = this.canvas.getContext("2d");

    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors

    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [{
          label: "Evolution",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#ec250d',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#ec250d',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#ec250d',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.data,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipRed
    };
    this.myChartData = new Chart(this.ctx, config);


    this.canvas = document.getElementById("CountryChart");
    this.ctx = this.canvas.getContext("2d");
    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors

    this.al.getChargeAlimentation().subscribe(res => {
      const total = parseInt(res['2021'].map(res => res.achetes.toString()))
      this.ach.getAchatBovinM().subscribe(res => {
        const bovin = parseInt(res['2021'].map(res => res.prix.toString()))
        this.dep.getFactureEau().subscribe(res => {
          const eau = parseInt(res['2021'].map(res => res.montant.toString()))
          this.mal.getCoutSante().subscribe(res => {
            const sante = parseInt(res['2021'].map(res => res.sante.toString()))

            this.fn.getChargeAutreDepense().subscribe(res => {
              const autres = parseInt(res['2021'].map(res => res.achetes.toString()))
              this.somme = total + bovin + autres;
              const autre = autres - (eau + sante);
              var myChart = new Chart(this.ctx, {
                type: 'bar',
                responsive: true,
                legend: {
                  display: false
                },
                data: {
                  labels: ['Aliments', 'Bovins', 'Eau', 'Santé', 'Autres'],
                  datasets: [{
                    label: "Dépenses",
                    fill: true,
                    backgroundColor: gradientStroke,
                    hoverBackgroundColor: gradientStroke,
                    borderColor: '#1f8ef1',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    data: [total, bovin, eau, sante, autre],
                  }]
                },
                options: gradientBarChartConfiguration
              });
            })
          })
        })
      })
    })
  }
  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    this.themeSubscription.unsubscribe();
  }

}
