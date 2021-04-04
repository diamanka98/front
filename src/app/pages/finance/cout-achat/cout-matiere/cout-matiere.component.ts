import { Component, OnInit } from '@angular/core';
import { AchatService } from '../../../../service/achat.service';
import { BovinService } from '../../../../service/bovin.service';
import { FinanceService } from '../../../../service/finance.service';
import { tansportBovin } from '../../../../_models/Finance';

@Component({
  selector: 'ngx-cout-matiere',
  templateUrl: './cout-matiere.component.html',
  styleUrls: ['./cout-matiere.component.scss']
})
export class CoutMatiereComponent implements OnInit {
  coutExistant: any;
  nbreBovinT: any;
  nbreBovin: any;
  coutTransport: any;
  coutBovin: any;
  bovinVendu: any;
  coutBovinT: any;
  cump: number;
  nombreTotaleBovin: number;
  bovinReelle: any;
  stockTheorique:any;
  constructor(private fn: FinanceService, private ach: AchatService, private bv: BovinService) { }

  ngOnInit(): void {
    this.fn.getCotTransport().subscribe(res => {
      this.coutTransport = parseInt(res['2021'].map(res => res.montant.toString()))

      this.ach.getNombreAchatBovin().subscribe(res => {
        this.nbreBovin = res;


        this.fn.getCoutsBovin().subscribe(res => {
          this.coutBovin = res;

          this.bv.getNombreBovinM().subscribe(res => {
            this.nbreBovinT = res;


            this.fn.getCoutExistant().subscribe(res => {
              this.coutExistant = res;


              this.bv.getNombreBovinVendu().subscribe(res => {
                this.bovinVendu = res;
                this.bv.getNombreBovin().subscribe(res => {

                  this.bovinReelle = res;

                  this.coutBovinT = this.coutExistant + this.coutTransport + this.coutBovin;
                  this.nombreTotaleBovin = this.nbreBovin + this.nbreBovinT
                  this.cump = this.coutBovinT / this.nombreTotaleBovin

                  this.stockTheorique = this.nombreTotaleBovin - this.bovinVendu

                })
              })
            })
          })
        })
      })
    })

  }


}