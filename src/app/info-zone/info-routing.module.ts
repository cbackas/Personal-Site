import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './categories/about/about.component';
import { SkillsComponent } from './categories/skills/skills.component';
import { ToolsComponent } from './categories/tools/tools.component';
import { ProjectsComponent } from './categories/projects/projects.component';

const routesList = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: 'about', pathMatch: 'full' },
];

const routes: Routes = routesList;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
