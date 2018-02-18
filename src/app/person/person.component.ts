import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'home-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  personForm:FormGroup;// group of form elements
  pwdPattern : string;
  emailPattern : string;
  qualification:string[];

  constructor(private fb:FormBuilder) {
    this.pwdPattern='^[A-Za-z]{8,15}$';
    this.emailPattern='^[a-z0-9$]+[@][a-z]+[.][a-z]{3}$';
    this.qualification=['MSC','MBA','MCA','PH.d'];

    this.personForm=fb.group({
      // create the individual form controls
      'firstName':['',Validators.required],
      'password':['',[Validators.required,Validators.pattern(this.pwdPattern)]],
      'gender':['',Validators.required],
      'education':['',Validators.required],
      'email':['',[Validators.required,Validators.pattern(this.emailPattern)]],
      // nested Form Group
      'address':this.fb.group({
        'city': ['',Validators.required],
        'state': ['',Validators.required],
      })
    })

  }

  
  ngOnInit() {
  }

  savePerson(personForm:any) {
    console.log(personForm.firstName);
  }
}
