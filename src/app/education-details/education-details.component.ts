import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface EdDetails
{
  educationDetails:string;
}


@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.scss']
})
export class EducationDetailsComponent implements OnInit {


  educationDetails= [{
    college_name: "The oxford college of engineering",
    university: "Visvesvaraya Technological University",
    class: "Bachelor of Engineering (B.E), (Mechatronics)",
    percentage: "8.05/10",
    yoc: "2019"
},
{
    college_name: "Sri Krishna Pu college ",
    university: "Department of Pre-University Education, Karnataka",
    class: "XII (Senior Secondary), Science(PCME)",
    percentage: "78.50%",
    yoc: "2015"
},
{
    college_name: "Sri Krishna international educational society ",
    university: "ICSE",
    class: "X (Secondary)",
    percentage: "70.5",
    yoc: "2013"
}
]



  constructor(public http:HttpClient) { }

  ngOnInit() {
    
  }



}
