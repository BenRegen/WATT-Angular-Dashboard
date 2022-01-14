import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CardContainerComponent } from './card-holder/card-container.component';
import { CardComponent } from './card-holder/card/card.component';
import { LogInComponent } from './auth-comp/log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import { AuthCompComponent } from './auth-comp/auth-comp.component';
import { SignUpComponent } from './auth-comp/sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    CardComponent,
    CardContainerComponent,
    LogInComponent,
    AuthCompComponent,
    SignUpComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
