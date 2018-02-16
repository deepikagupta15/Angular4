import { Component, OnInit } from '@angular/core';
import {RecepieService} from '../recepie.service';
import {Recepie} from '../receipe';

@Component({
  selector: 'home-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css']
})
export class RecepieComponent implements OnInit {
  recepies:Recepie[];
  status:boolean;
  bday:Date;
  value:number;
  power:number;

 // DI:loose coupling
  constructor(private recService:RecepieService) { 
    this.recepies=recService.fetchAllReceipies();
    this.status=false;
    this.bday = new Date(1994,3,15);
    this.value=2;
    this.power=3;
  }

  ngOnInit() {
  }

addRecepie(rid,rname,rprepTime,rmakeTime):void {
  this.recService.addRecepie(rid,rname,rprepTime,rmakeTime);
  this.recepies=this.recService.fetchAllReceipies();
}

deleteRecepie(i:number) {
  
  this.recService.deleteRecepie(i);
  this.recepies=this.recService.fetchAllReceipies();
}

goAhead() {
    this.status=!this.status;
  }
}
