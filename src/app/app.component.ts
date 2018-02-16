import { Component } from '@angular/core';
import {Address} from './address';

@Component({
  selector: 'home-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  email:string;
  imgPath:string;
  permanentAddress:Address;

  constructor() {
    this.email='test@abc.com';
    this.title='My Practice App';
    this.imgPath='../assets/Hydrangeas.jpg'
    this.permanentAddress = {
      city:'Pune',
      state:'MH'
    }
  }
}
