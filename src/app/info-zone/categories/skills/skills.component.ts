import { Component } from '@angular/core';
import { faAngular, faReact, faHtml5 } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './skills-icons.scss']
})
export class SkillsComponent {
  angularIcon = faAngular;
  reactIcon = faReact;
  htmlIcon = faHtml5;
}
