import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  NbInputModule,
  NbTreeGridModule,
  NbToggleModule,
  NbAccordionModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule as ngFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { BovinComponent } from './bovin.component';
// import { EnsembleBovinComponent } from './ensemble-bovin/ensemble-bovin.component';
// import { CardNombreComponent } from './card-nombre/card-nombre.component';
import { ListeTableComponent } from './liste-table/liste-table.component';
// import { RaceComponent } from './race/race.component';
import { BovinAchatsComponent } from './bovin-achats/bovin-achats.component';
import { DetailBovinComponent } from './liste-table/detail-bovin/detail-bovin.component';
import { ListeBovinComponent } from './liste-bovin/liste-bovin.component';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BovinRaceComponent } from './bovin-race/bovin-race.component';
import { FrontBovinComponent } from './bovin-race/front-bovin/front-bovin.component';
import { FrontRaceComponent } from './bovin-race/front-race/front-race.component';
import { BovinAchatComponent } from './bovin-achat/bovin-achat.component';
import { FrontAchatComponent } from './bovin-achat/front-achat/front-achat.component';
import { BackBovinComponent } from './bovin-achat/back-bovin/back-bovin.component';


@NgModule({
  declarations: [
    BovinComponent,
    ListeTableComponent,
    BovinAchatsComponent,
    DetailBovinComponent,
    ListeBovinComponent,
    BovinRaceComponent,
    FrontBovinComponent,
    FrontRaceComponent,
    BovinAchatComponent,
    FrontAchatComponent,
    BackBovinComponent,
  ],
  imports: [
    Ng2SmartTableModule,
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
    NbInputModule, NbTreeGridModule ,
    NgxChartsModule,ChartModule,  NbToggleModule,
    NbAccordionModule,

    ngFormsModule,
    Ng2OrderModule, 
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgbModule,
  ]
})
export class BovinModule { }
