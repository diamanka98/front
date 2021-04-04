import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceComponent } from './finance.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';


import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbDatepickerModule,
  NbInputModule, NbTreeGridModule , NbToggleModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { BilanComponent } from './bilan/bilan.component';
import { TresorerieComponent } from './tresorerie/tresorerie.component';
// import { ComptesComponent } from './comptes/comptes.component';
import { DepensesComponent } from './depenses/depenses.component';
import { LivreComponent } from './livre/livre.component';
import { RevenuComponent } from './revenu/revenu.component';
import { ChiffreAffaireComponent } from './chiffre-affaire/chiffre-affaire.component';
import { CapaciteComponent } from './capacite/capacite.component';
// import { AchatsComponent } from './achats/achats.component';
import { CoutProductionComponent } from './cout-production/cout-production.component';
import { BudgetComponent } from './budget/budget.component';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FacturesComponent } from './factures/factures.component';
import { LaitComponent } from './factures/lait/lait.component';
import { BovinsFComponent } from './factures/bovins-f/bovins-f.component';
import { CoutAchatComponent } from './cout-achat/cout-achat.component';
import { CoutRevientComponent } from './cout-achat/cout-revient/cout-revient.component';
import { CoutMatiereComponent } from './cout-achat/cout-matiere/cout-matiere.component';
// import { CoutMatiereComponent } from './coutAchat/cout-matiere/cout-matiere.component';
// import { CoutRevientComponent } from './coutAchat/cout-revient/cout-revient.component';
@NgModule({
  declarations: [
    FinanceComponent,
    BilanComponent,
    TresorerieComponent,
    // ComptesComponent,
    DepensesComponent,
    LivreComponent,
    RevenuComponent,
    ChiffreAffaireComponent,
    CapaciteComponent,
    // AchatsComponent,
    CoutProductionComponent,
    BudgetComponent,
    FacturesComponent,
    LaitComponent,
    BovinsFComponent,
    CoutAchatComponent,
    CoutRevientComponent,
    CoutMatiereComponent,
  ],
  imports: [
    NbDatepickerModule,
    NgxEchartsModule,
    ThemeModule,
    CommonModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbUserModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbToggleModule,
    NbInputModule, NbTreeGridModule,
    ChartModule,
    NgxChartsModule,



    
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgbModule,
  ]
})
export class FinanceModule { }
