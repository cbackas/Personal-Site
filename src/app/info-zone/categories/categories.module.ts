import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './languages/skills.component';
import { ToolsComponent } from './tools/tools.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [SkillsComponent, ToolsComponent, ProjectsComponent],
  imports: [
    CommonModule
  ],
  exports: [SkillsComponent, ToolsComponent, ProjectsComponent]
})
export class CategoriesModule { }
