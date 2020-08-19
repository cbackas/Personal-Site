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
      name: 'Hookbuffer',
      icon: 'https://raw.githubusercontent.com/cbackas/hookbuffer/master/assets/icon.png',
      description:
        'Webhook proxy server written in Go. Catches and groups webhook notifications from my server then passes them along to Discord. Runs in a Docker container on my server.',
      labels: ['GoLang', 'Webhooks', 'Docker'],
      url: 'https://gitlab.com/cbackas/hookbuffer',
    },
    {
      name: 'TV Bot',
      icon: 'https://gitlab.com/cbackas/tvbot-jda/-/raw/master/assets/icon.png',
      description:
        'TVBot is a Discord chat bot written in Java for a large TV focused server. Used to do moderation, channel managment, and adds integration with TV show data via the Trakt and TVDB APIs.',
      labels: ['Java', 'SQLite'],
      url: 'https://gitlab.com/cbackas/tvbot-jda',
    },
    {
      name: 'Nextcloud Deck iOS',
      icon: 'https://raw.githubusercontent.com/cbackas/iOS-Deck/main/Assets/Icon.png',
      description:
        'iOS app that interacts with the Nextcloud API in order to use the Nextcloud Deck kanban board on the go. Currently in development.',
      labels: ['Swift', 'API'],
      url: 'https://github.com/cbackas/iOS-Deck',
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
