import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticlesModule } from 'ngx-particle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ParticleCanvasComponent } from './particle-canvas/particle-canvas.component';
import { CaptionComponent } from './caption/caption.component';
import { ScrollDownComponent } from './scroll-down/scroll-down.component';
import { LandingZoneComponent } from './landing-zone/landing-zone.component';

@NgModule({
  declarations: [ParticleCanvasComponent, CaptionComponent, ScrollDownComponent, LandingZoneComponent],
  imports: [CommonModule, ParticlesModule, FontAwesomeModule],
  exports: [LandingZoneComponent],
})
export class LandingZoneModule {}
