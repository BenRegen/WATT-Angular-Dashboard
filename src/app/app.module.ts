import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SideNavComponent } from './side-nav/side-nav.component';
=======
import { CardContainerComponent } from './card-holder/card-container.component';
import { CardComponent } from './card-holder/card/card.component';
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SideNavComponent
=======
    CardComponent,
    CardContainerComponent
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
