import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { ToolsComponent } from './tools/tools.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [SkillsComponent, ToolsComponent, ProjectsComponent, AboutComponent],
  imports: [
    CommonModule
  ],
  exports: [SkillsComponent, ToolsComponent, ProjectsComponent]
})
export class CategoriesModule { }
