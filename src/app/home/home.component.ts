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
 

  ngOnInit(): void {
    this.name="K.R. SAI CHARAN"
    this.onTypingAnimation()
  }

  onTypingAnimation() {
    //Doc refer https://www.npmjs.com/package/typewriter-effect

    new Typewriter('#typewriter', {
      strings: ["Full stack web developer","Data Science & Machine Learning Enthusiast"],
      autoStart: true,
      loop:true,
    });
  }
}
