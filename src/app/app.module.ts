import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ParticlesModule } from 'ngx-particle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingZoneComponent } from './landing-zone/landing-zone.component';
import { InfoAreaComponent } from './info-area/info-area.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingZoneComponent,
    InfoAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
