import { EducationDetailsComponent } from './../education-details/education-details.component';
import { AboutComponent } from './../about/about.component';
import { Component, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  name:string;
  particlesOptions:any;
  pointerEffectOptions:any;
  isAnimated:boolean;

  ngOnInit(): void {
    this.particlesAnimation()
    this.name="K.R. SAI CHARAN"
    this.TypingAnimation()
    this.pointerEffect();
  this.isAnimated=false;
  }

  openAbout() {
    const dialogRef = this.dialog.open(AboutComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEducationDetails()
  {
    const dialogRef = this.dialog.open(EducationDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
          random: true,
          speed: 6,
          straight: true,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
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
          type: "star"
        },
        size: {
          random: true,
          value: 5
        }
      },
      detectRetina: true
    };
  }
  
  pointerEffect()
  {
  this.pointerEffectOptions=
  {
    fpsLimit: 60,
    particles: {
      number: {
        value: 0,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ff0000",
        animation: {
          enable: true,
          speed: 180,
          sync: true
        }
      },
      shape: {
        type: "star",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 3,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 15,
        random: {
          enable: true,
          minimumValue: 5
        },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 5,
          sync: true,
          startValue: "min",
          destroy: "max"
        }
      },
      links: {
        enable: false
      },
      move: {
        enable: true,
        speed: 40,
        direction: "none",
        random: false,
        straight: false,
        outMode: "destroy",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onhover: {
          enable: true,
          mode: "trail"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        repulse: {
          distance: 200
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        },
        trail: {
          delay: 0.005,
          quantity: 5
        }
      }
    },
    retina_detect: true,
    background: {
      color: "#000000",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    }
  };
  
}

}

