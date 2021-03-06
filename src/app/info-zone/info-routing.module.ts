import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './categories/about/about.component';
import { SkillsComponent } from './categories/skills/skills.component';
import { ProjectsComponent } from './categories/projects/projects.component';

const routesList = [
  { path: '', redirectTo: 'skills', pathMatch: 'full' },
  // { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: 'skills', pathMatch: 'full' },
];

const routes: Routes = routesList;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
