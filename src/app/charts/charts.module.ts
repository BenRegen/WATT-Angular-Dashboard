import { PieChartsComponent } from './pie-charts/pie-charts.component';
import { LineChartsComponent } from './line-charts/line-charts.component';
import { ChartsComponent } from './charts.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    ChartsComponent,
    LineChartsComponent,
    PieChartsComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    })
  ]
})
export class ChartsModule { }
