import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LandingZoneModule } from './landing-zone/landing-zone.module';
// import { InfoZoneModule } from './info-zone/info-zone.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LandingZoneModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
