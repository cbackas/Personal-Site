import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Object = [
    {
      name: 'TV Bot',
      icon: '/assets/images/tvbot.png',
      description:
        'TVBot is a Discord chat bot written in Java for a large public server. Has also had variated versions like MovieBot and GamingBot but TVBot is still used most today.',
      labels: ['Java', 'SQLite'],
    },
    {
      name: 'Personal Site',
      icon: 'https://semantic-ui.com/images/avatar/large/jenny.jpg',
      description:
        'Personal website (this one) that I built from scratch for practice with the Angular framework.',
      labels: ['Angular', 'JavaScript', 'HTML'],
    },
    {
      name: 'Posterizer',
      icon: '/assets/images/tpdb.png',
      description:
        "Browser extension I made for personal use. Parses image URLs from active PosterDB tab and performs HTTP POST requests to my Plex server's API.",
      labels: ['React', 'JavaScript', 'HTML', 'cheerio'],
    },
  ];

  ngOnInit(): void {}
}
