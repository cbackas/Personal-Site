import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguagesComponent } from './categories/languages/languages.component';
import { ToolsComponent } from './categories/tools/tools.component';
import { ProjectsComponent } from './categories/projects/projects.component';


const routes: Routes = [
  { path: 'languages', component: LanguagesComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
