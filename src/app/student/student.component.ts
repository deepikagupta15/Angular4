import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-student',
  templateUrl: './student.component.html',
  styles:[
    `
      div {
          color:red;
      }
    `
  ]
})
export class StudentComponent implements OnInit {
  qulaification:string[];

  constructor() { 
    this.qulaification=['MSc','PHd','MCA','MBA','BE'];
  }

  ngOnInit() {
  }

  saveStudent(studForm:any) {
    console.log(studForm.studName);
  }
}
