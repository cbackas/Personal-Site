import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './skills-icons.scss'],
})
export class SkillsComponent implements OnInit {
  // change icons in each category here
  // MUST KEEP NUMBER OF ICONS THE SAME OR ELSE CSS CHANGES REQUIRED

  // 9 icons
  list_icons_development = [
    'devicon-java-plain-wordmark colored',
    'devicon-csharp-plain colored',
    'devicon-javascript-plain colored',
    'devicon-angularjs-plain colored',
    'devicon-react-original-wordmark colored',
    'devicon-nodejs-plain colored',
    'devicon-electron-original colored',
    'devicon-python-plain-wordmark colored',
    'devicon-html5-plain-wordmark colored',
  ];
  // 5 icons
  list_icons_tools = [
    'devicon-git-plain-wordmark colored',
    'devicon-npm-original-wordmark colored',
    'devicon-jetbrains-plain colored',
    'devicon-visualstudio-plain colored',
    'devicon-gitlab-plain-wordmark colored',
  ];
  // 6 icons
  list_icons_servers = [
    'devicon-linux-plain',
    'devicon-docker-plain-wordmark colored',
    'devicon-nginx-original colored',
    'devicon-mysql-plain-wordmark colored',
    'devicon-postgresql-plain-wordmark colored',
    'devicon-mongodb-plain-wordmark colored',
  ];

  // takes in one of the above arrays and shifts its items (front item to back)
  shift = (array) => {
    array.push(array.shift());
  };

  // lists actually used in HTML template
  icons_development = [];
  icons_tools = [];
  icons_servers = [];

  categories = [
    {
      title: 'Development',
      description:
        "Languages I've used in projects include but are not limited to: JavaScript (React, Electron, Angular, NodeJS), Java, Python, and C# (ASP.NET). Knowledgeable about SQL and relational database design with some experience with NoSQL as well.",
      icons: this.icons_development,
    },
    {
      title: 'Tools',
      description:
        'Comfortable with a variety of standard tools like Git, package managers like NPM, and various IDEs. Plans to use Gitlab CD/CI tools soon.',
      icons: this.icons_tools,
    },
    {
      title: 'Servers and Networking',
      description:
        'Experienced with Windows and Linux deployments whether baremetal, virtualized, or dockerized. Strong understanding of networking principles involved in deployment, security, and accessibility of network devices and services.',
      icons: this.icons_servers,
    },
  ];

  ngOnInit(): void {
    // for each category of icon (dev, tools, servers)
    // we need an array for each col (so 3)
    // each of those arrays must be shifted 1 from eachother
    // these 3 arrays are stored in a single array for each category
    // result: much more modular CSS fading image list. still has CSS bottlenecks tho
    this.icons_development[0] = Array.from(this.list_icons_development);
    this.shift(this.list_icons_development);
    this.icons_development[1] = Array.from(this.list_icons_development);
    this.shift(this.list_icons_development);
    this.icons_development[2] = Array.from(this.list_icons_development);

    this.icons_tools[0] = Array.from(this.list_icons_tools);
    this.shift(this.list_icons_tools);
    this.icons_tools[1] = Array.from(this.list_icons_tools);
    this.shift(this.list_icons_tools);
    this.icons_tools[2] = Array.from(this.list_icons_tools);

    this.icons_servers[0] = Array.from(this.list_icons_servers);
    this.shift(this.list_icons_servers);
    this.icons_servers[1] = Array.from(this.list_icons_servers);
    this.shift(this.list_icons_servers);
    this.icons_servers[2] = Array.from(this.list_icons_servers);
  }
}
