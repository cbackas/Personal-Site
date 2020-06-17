import { Component, OnInit } from '@angular/core';
import { Project } from './project-item/project';

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
  // TODO pull this data from some json asset
  projects: Project[] = [
    {
      name: 'TV Bot',
      icon: '/assets/images/tvbot.png',
      description:
        'TVBot is a Discord chat bot written in Java for a large TV themed server. Used to do moderation, channel managment, and TV show data integration.',
      labels: ['Java', 'SQLite'],
      url: 'https://gitlab.com/cbackas/tvbot-jda',
    },
    {
      name: 'Personal Site',
      icon: '/assets/images/personalsite.png',
      description:
        'Personal website (this one) that I built from scratch for practice with the Angular framework and extra HTML/CSS experience.',
      labels: ['Angular', 'JavaScript', 'HTML'],
      url: 'https://gitlab.com/cbackas/personal-site',
    },
    {
      name: 'Posterizer',
      icon: '/assets/images/tpdb.png',
      description:
        "Browser extension I made for personal use. Parses image URLs from the active tab's source HTML and performs HTTP POST requests to my Plex server's API.",
      labels: ['React', 'JavaScript', 'HTML', 'cheerio'],
      url: 'https://gitlab.com/cbackas/posterizer-extension',
    },
    {
      name: 'Other',
      icon: '/assets/images/gitlab.png',
      description:
        'On my Gitlab profile you can find the projects linked here as well as older projects, variations of projects, and one off scripts for personal use or university assignments.',
      labels: [],
      url: 'https://gitlab.com/cbackas',
    },
  ];

  ngOnInit(): void {}
}
