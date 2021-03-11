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
      name: 'Posterizer',
      icon: '/assets/images/posterizer-icon.png',
      description:
        "Browser extension I made for personal use. Parses image URLs from the active tab's source HTML and performs HTTP POST requests to my Plex server's API.",
      labels: ['React', 'JavaScript', 'HTML', 'cheerio'],
      url: 'https://github.com/cbackas/Posterizer-Extension',
    },
    {
      name: 'SpamGuard',
      icon: 'https://raw.githubusercontent.com/cbackas/SpamGuard/master/assets/icon.png',
      description:
        "Dockerized Python script that catches and deletes emails that Outlook's email filters aren't powerful enough to stop.",
      labels: ['Python', 'IMAP', 'IMAP-idle', 'Docker'],
      url: 'https://github.com/cbackas/SpamGuard',
    },
    {
      name: 'SpotiSync',
      icon: 'https://raw.githubusercontent.com/cbackas/spotisync/master/images/spotisync-logo.png',
      description:
        "Simple Dockerized Python script that syncs songs on Spotify from one playlist to another.",
      labels: ['Python', 'API', 'Docker'],
      url: 'https://github.com/cbackas/spotisync',
    },
    {
      name: 'Decoder',
      icon: 'https://raw.githubusercontent.com/cbackas/Decoder/master/extension/icons/icon.png',
      description:
        "Browser extension that decodes Base64 strings and copies them to your clipboard.",
      labels: ['JavaScript', 'Webpack', 'Base64'],
      url: 'https://github.com/cbackas/Decoder',
    },
    {
      name: 'Hookbuffer',
      icon: 'https://raw.githubusercontent.com/cbackas/hookbuffer/master/assets/icon.png',
      description:
        'Webhook proxy server written in Go. Catches and groups webhook notifications from my server then passes them along to Discord. Runs in a Docker container on my server.',
      labels: ['GoLang', 'Webhooks', 'Docker'],
      url: 'https://github.com/cbackas/hookbuffer',
    },
    {
      name: 'Nextcloud Deck iOS',
      icon: '/assets/images/ios-deck.png',
      description:
        'iOS app I worked on to learn Swift/SwiftUI that interacts with the Nextcloud API in order to use the Nextcloud Deck kanban board on the go.',
      labels: ['Swift', 'API'],
      url: 'https://github.com/cbackas/iOS-Deck',
    },
    {
      name: 'Personal Site',
      icon: '/assets/images/personalsite.png',
      description:
        'Personal website (this one) that I built from scratch for practice with the Angular framework and to gain some extra HTML/CSS experience.',
      labels: ['Angular', 'JavaScript', 'HTML'],
      url: 'https://github.com/cbackas/Personal-Site',
    },
    {
      name: 'TV Bot',
      icon: 'https://gitlab.com/cbackas/tvbot-jda/-/raw/master/assets/icon.png',
      description:
        'TVBot is a Discord chat bot written in Java for a large TV focused server. Used to do moderation, channel managment, and adds integration with TV show data via the Trakt and TVDB APIs.',
      labels: ['Java', 'SQLite'],
      url: 'https://github.com/cbackas/TVBot',
    },
    {
      name: 'Other',
      icon: '/assets/images/github.png',
      description:
        'On my Github profile you can find the projects linked here as well as older projects, variations of projects, and one off scripts for personal use or university assignments.',
      labels: [],
      url: 'https://github.com/cbackas',
    },
  ];

  ngOnInit(): void {}
}
