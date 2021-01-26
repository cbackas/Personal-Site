import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-caption',
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.scss'],
})
export class CaptionComponent {
  // icons
  emailIcon = faEnvelope;
  linkedinIcon = faLinkedin;
  githubIcon = faGithub;

  // captionStyle: Object = {};
  nameStyle: Object = {
    margin: '0 0 .5em 0',
  };
  subtitleStyle: Object = {
    margin: '0 0 1em 0',
    height: '100%',
  };
  buttonStyle: Object = {};

  // Starting color of name
  nameColor: string = '#ffffff';

  // does a quick thing to generate a random hex color code
  getRandomColor() {
    return (
      '#' + ('00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6)
    );
  }

  // updates the color of name with a random color
  nameClicked() {
    this.nameStyle = {
      ...this.nameStyle,
      color: this.getRandomColor(),
    };
  }
}
