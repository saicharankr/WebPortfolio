import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  particlesOptions:any;

  constructor() { }

  internship= [{
    "company_name": "Saras micron tools Pvt Ltd.(Bangalore)",
    "role": "Engineering-Trainee",
    "duration": "July/9/2018 - July/31/2018",
    "description": ["It is a machine tools manufacturing industry","Internship Result:-Suggested methods of automation and interconnectivity (IIOT) between various departments of plant/factory to increase the productivity."],
    "tools_used": ["lathe Machine","CNC Machine","AutoCAD"],
    "image":"https://content3.jdmagicbox.com/comp/bangalore/19/080p30219/catalogue/saras-micron-tools-pvt-ltd-bommasandra-industrial-area-bangalore-press-component-dealers-8djc9t-250.jpg",
},
{
    "company_name": "The/Nudge foundation.(Bangalore)",
    "role": "Market Research Analyst",
    "duration": "Aug 2019 - Oct 2019",
    "description": [" I have worked on two projects.", "1. Impact Analysis of Gurukul Product by The/Nudge Foundation", "2. Impact Analysis of Kerela flood Fund Donation campaign"],
    "tools_used": ["Advanced Excel", "Python", "Tableau"],
    "image":"https://miro.medium.com/fit/c/336/336/1*PsL87zy1r3K_DMStzBSeVQ.png",
}
]

jobs= [{
  "company_name": "Celominds Solutions Pvt Limited",
  "role": "Full Stack software developer ",
  "duration": "Oct-2019 — at present",
  "description": ["I have worked on Developing ASP.NET core web apps with C# in Backend Programming language with MS SQL Database and used frontend Languages HTML, CSS with Bootstrap library, JavaScript, Angular 9 and Ionic for cross platform web development."],
  "tools_used": ["C#","HTML","CSS","Angular","Ionic Framework","ASP.NET core MVC"],
  "image":"https://i.ytimg.com/vi/ngAk_H5gIfk/maxresdefault.jpg",
}

]

  ngOnInit(): void {
    this.particlesAnimation();

  }
  
  

  particlesAnimation()
  {
   //Doc refer https://github.com/matteobruni/tsparticles/blob/master/components/angular/README.md

    this.particlesOptions = {
      // background: {
      //   color: {
      //     value: "#0d47a1",
          
      //   }
      // },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "window",
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
      retina_detect: true,
    };
  }
}
