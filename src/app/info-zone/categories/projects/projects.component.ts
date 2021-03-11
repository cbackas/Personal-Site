import { Component, OnInit } from '@angular/core';
import { Project } from './project-item/project';

declare var require: any
const projects = require("../../../../assets/projects.json");

@Component({
  selector: 'app-projects',
  template: `<div class="grid">
    <div *ngFor="let project of projects">
      <app-project [init]="project"></app-project>
    </div>
  </div>`,
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = projects; // edit projects list in assets json file

  ngOnInit(): void {}
}
