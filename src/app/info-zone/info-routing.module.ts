import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './categories/languages/skills.component';
import { ToolsComponent } from './categories/tools/tools.component';
import { ProjectsComponent } from './categories/projects/projects.component';

const routesList = [
  { path: 'skills', component: SkillsComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'projects', component: ProjectsComponent },
];

const routes: Routes = routesList;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
