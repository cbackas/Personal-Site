import { Component, OnInit } from '@angular/core';
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGitlab } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landing-zone',
  templateUrl: './landing-zone.component.html',
  styleUrls: ['./landing-zone.component.scss'],
})
export class LandingZoneComponent implements OnInit {
  // particle canvas variables
  particleStyle: object = {};
  particleParams: object = {};
  width: number = 100;
  height: number = 100;

  // Starting color of name
  nameColor: string = '#ffffff';

  // does a quick thing to generate a random hex color code
  getRandomColor() {
    return '#' + ('00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6);
  }

  // updates the color of name with a random color
  nameClicked() {
    this.nameColor = this.getRandomColor();
  }

  // icons
  emailIcon = faEnvelope;
  linkedinIcon = faLinkedin;
  gitlabIcon = faGitlab;
  scrollIcon = faChevronDown;

  // initialize settings for the Particle canvas
  ngOnInit() {
    this.particleStyle = {
      display: 'block',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.particleParams = {
      particles: {
        number: {
          value: 110,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'polygon',
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3.5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 135,
          color: '#44cefc',
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab',
          },
          onclick: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 100,
            line_linked: {
              opacity: 0.2,
            },
          },
          bubble: {
            distance: 200,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 100,
            duration: 1,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 10,
          },
        },
      },
      retina_detect: true,
    };
  }
}
