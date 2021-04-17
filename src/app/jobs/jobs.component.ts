import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  particlesOptions: any;

  constructor() {}
  jobs = [
    {
      company_name: 'Celominds Solutions Pvt Limited',
      role: 'Full Stack software developer ',
      duration: 'Oct-2019 — Jan-2021',
      description: [
        'Project 1 - Building management system', 'Project 2 - Community Senses(Community management application) - Technical Support','Project 3 -Vasuman Website and Timesheet application Technical support','Project 4 - Krishikhoj(Farmers application)'
      ],
      tools_used: [
        'Drupal',
        'PHP',
        'Linux based OS',
        'C#',
        'HTML',
        'CSS',
        'Angular',
        'Ionic Framework',
        'ASP.NET core MVC',
      ],
      image: 'https://i.ytimg.com/vi/ngAk_H5gIfk/maxresdefault.jpg',
    },
    {
      company_name: 'Vegam Solutions',
      role: 'Software developer ',
      duration: 'Jan-2021 — at present',
      description: ['Factory Automation Products'],
      tools_used: [
        'C#',
        'HTML',
        'CSS',
        'JavaScript',
        'Jquery',
        'ASP.NET core MVC',
      ],
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC4E0BAQGSCPtDpuFWNw%2Fcompany-logo_200_200%2F0%3Fe%3D2159024400%26v%3Dbeta%26t%3DKqsppTYIPVEQ-aL0wRlrUd1pIR58eHGLinvgQDM5bBE&f=1&nofb=1',
    },
  ];

  ngOnInit(): void {}
}
