import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesComponent } from './languages/languages.component';
import { ToolsComponent } from './tools/tools.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [LanguagesComponent, ToolsComponent, ProjectsComponent],
  imports: [
    CommonModule
  ],
  exports: [LanguagesComponent, ToolsComponent, ProjectsComponent]
})
export class CategoriesModule { }
