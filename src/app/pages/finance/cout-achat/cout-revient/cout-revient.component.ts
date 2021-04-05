import { Component, OnInit } from '@angular/core';
import { AlimentationService } from '../../../../service/alimentation.service';
import { DepensesService } from '../../../../service/depenses.service';
import { FinanceService } from '../../../../service/finance.service';
import { MaladieService } from '../../../../service/maladie.service';
import { ProductionService } from '../../../../service/production.service';
import { VenteService } from '../../../../service/vente.service';

@Component({
  selector: 'ngx-cout-revient',
  templateUrl: './cout-revient.component.html',
  styleUrls: ['./cout-revient.component.scss']
})
export class CoutRevientComponent implements OnInit {

  salaireLait: number;
  coutChauffage: number;
  coutEmballage: number;
  coutSterilisant:number;
  quantiteLait:any;


  //bovin
  eau: number;
  electricite: number;
  sante: number;
  prixAchats: number;
  transportAliment: number;
  coutTransport: number;
  coutBovin:any;
  salaire:number;

  vente:number;

  constructor(private fn: FinanceService,
     private dp: DepensesService,
     private prod:ProductionService,
     private ml:MaladieService,
     private al:AlimentationService,private vte:VenteService) { }

  ngOnInit(): void {
    this.fn.getCoutSalaireLait().subscribe(res => {
      this.salaireLait = parseInt(res['2021'].map(res => res.montant.toString()))
    })

    this.dp.getcoutChauffage().subscribe(res => {
      this.coutChauffage = parseInt(res['2021'].map(res => res.montant.toString()))
    })

    this.dp.getcoutEmballage().subscribe(res => {
      this.coutEmballage = parseInt(res['2021'].map(res => res.montant.toString()))
    })

    this.dp.getcoutSterilisant().subscribe(res => {
      this.coutSterilisant = parseInt(res['2021'].map(res => res.montant.toString()))
    })
    this.prod.getLaitVenteLait().subscribe(res => {
      this.quantiteLait = parseInt(res['2021'].map(res => res.vente.toString()))
    })

    //Bovins
    this.dp.getFactureEau().subscribe(res => {
      this.eau = parseInt(res['2021'].map(res => res.montant.toString()))
    })

    this.dp.getFactureElectricite().subscribe(res => {
      this.electricite = parseInt(res['2021'].map(res => res.montant.toString()))
    })

    this.ml.getCoutSante().subscribe(res => {
      this.sante = parseInt(res['2021'].map(res => res.sante.toString()))
    })

    this.al.getChargeAlimentation().subscribe(res => {
      this.prixAchats = parseInt(res['2021'].map(res => res.achetes.toString()));
    })
    this.al.getCoutTransportAlimentation().subscribe(res => {

      this.transportAliment = parseInt(res['2021'].map(res => res.montant.toString()));

    })

    this.fn.getCotTransport().subscribe(res => {
      this.coutTransport = parseInt(res['2021'].map(res => res.montant.toString()))
    })
    this.fn.getCoutsBovin().subscribe(res => {
      this.coutBovin = res;
    })
    this.fn.getCoutSalaireBovin().subscribe(res => {
      this.salaire = parseInt(res['2021'].map(res => res.montant.toString()))
    })

      this.vte.getVenteBovinM().subscribe(res => {
        this.vente = parseInt(res['2021'].map(res => res.vente.toString()))
      
      })
  }

}
