import { Component, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  name:string;
  particlesOptions:any;

  ngOnInit(): void {
    this.particlesAnimation()
    this.name="K.R. SAI CHARAN"
    this.TypingAnimation()
  
  }

  TypingAnimation() {
    //Doc refer https://www.npmjs.com/package/typewriter-effect

    new Typewriter('#typewriter', {
      strings: ["Full stack web developer.","Data Science Enthusiast.","Machine Learning Enthusiast."],
      autoStart: true,
      loop:true,
    });
  }

  particlesAnimation()
  {
   //Doc refer https://github.com/matteobruni/tsparticles/blob/master/components/angular/README.md

    this.particlesOptions = {
      background: {
        color: {
          value: "#0d47a1",
          
        }
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push"
          },
          onHover: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
            speed: 3
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: "#ffffff"
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 6,
          straight: false
        },
        number: {
          density: {
            enable: true,
            value_area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: "circle"
        },
        size: {
          random: true,
          value: 5
        }
      },
      detectRetina: true
    };
  }
  
}

