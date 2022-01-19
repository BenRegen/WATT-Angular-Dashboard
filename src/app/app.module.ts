import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CardContainerComponent } from './card-holder/card-container.component';
import { CardComponent } from './card-holder/card/card.component';
import { LogInComponent } from './auth-comp/log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import { AuthCompComponent } from './auth-comp/auth-comp.component';
import { ChartsComponent } from './charts/charts.component';
import { LineChartsComponent } from './charts/line-charts/line-charts.component';
import { PieChartsComponent } from './charts/pie-charts/pie-charts.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    CardComponent,
    CardContainerComponent,
    LogInComponent,
    AuthCompComponent,
    ChartsComponent,
    LineChartsComponent,
    PieChartsComponent,
    HeaderComponent,
    DashboardComponent,
    AuthGuardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
