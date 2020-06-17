import { Component, Input, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { Project } from './project';

@Component({
  selector: 'app-project',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
  @Input('init')
  project: Project = {
    name: '',
    icon: '',
    description: '',
    labels: [],
    url: '',
  };

  externalLinkIcon = faExternalLinkAlt;

  hovering: boolean = false;

  mouseEnter() {
    this.hovering = true;
  }

  mouseLeave() {
    this.hovering = false;
  }

  ngOnInit(): void {}
}
