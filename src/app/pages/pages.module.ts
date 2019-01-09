import { NgModule, } from '@angular/core'
import { CommonModule  } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProgressComponent } from './progress/progress.component'
import { Graficas1Component } from './graficas1/graficas1.component'
import { PagesComponent } from './pages.component'
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms'
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
//ng2-charts
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        GraficoDonaComponent,
        IncrementadorComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        CommonModule
    ]
})

export class PagesModule{ }