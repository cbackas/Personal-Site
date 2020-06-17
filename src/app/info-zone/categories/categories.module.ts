import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component';

@NgModule({
  declarations: [
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ProjectItemComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [AboutComponent, SkillsComponent, ProjectsComponent],
})
export class CategoriesModule {}
