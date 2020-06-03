import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoZoneComponent } from './info-zone/info-zone.component';
import { SelectionComponent } from './selection/selection.component';
import { InfoRoutingModule } from './info-routing.module';

@NgModule({
  declarations: [InfoZoneComponent, SelectionComponent],
  imports: [
    CommonModule,
    InfoRoutingModule
  ],
  exports: [
    InfoZoneComponent
  ]
})
export class InfoZoneModule { }
