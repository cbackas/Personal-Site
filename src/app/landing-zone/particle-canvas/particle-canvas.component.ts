import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particle-canvas',
  templateUrl: './particle-canvas.component.html',
  styleUrls: ['./particle-canvas.component.scss'],
})
export class ParticleCanvasComponent implements OnInit {
  // particle canvas variables
  particleStyle: object = {};
  particleParams: object = {};
  width: number = 100;
  height: number = 100;

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

  // // watch scroll location and set styles for the caption
  // @HostListener('window:scroll', [])
  // onScroll(): void {
  //   // document.documentElement.setAttribute('data-scroll', window.scrollY.toString());

  //   let pos =
  //     (document.documentElement.scrollTop || document.body.scrollTop) +
  //     document.documentElement.offsetHeight;
  //   let max = document.documentElement.scrollHeight;
  //   // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
  //   if (pos >= (max*.95)) {
  //     document.documentElement.dataset.scrolledBottom = 'true';
  //     // document.documentElement.setAttribute('data-scrolled-bottom', 'true');
  //   } else {
  //     document.documentElement.dataset.scrolledBottom = 'false';
  //     // document.documentElement.setAttribute('data-scrolled-bottom', 'false');
  //   }
  //   //   this.nameStyle = {};
  //   //   this.subtitleStyle = {};
  //   //   this.buttonStyle = {
  //   //     ...this.buttonStyle,
  //   //     'justify-content': 'right',
  //   //   };
  //   //   this.scrollDownVisible = 'hidden';
  //   // } else {
  //   //   this.nameStyle = {
  //   //     margin: '0 0 .5em 0',
  //   //   };
  //   //   this.subtitleStyle = {
  //   //     margin: '0 0 1em 0',
  //   //     height: '100%',
  //   //   };
  //   //   this.buttonStyle = {
  //   //     ...this.buttonStyle,
  //   //     'justify-content': 'left',
  //   //   };
  //   //   this.scrollDownVisible = 'visible';
  // }
}
