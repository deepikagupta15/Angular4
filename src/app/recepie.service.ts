import { Injectable } from '@angular/core';
import {Recepie} from './receipe';

@Injectable()
export class RecepieService {
  recepies:Recepie[];

  constructor() {
    this.recepies=[
      {"id":101,"recName":"Eggs","recPreTime":"2 mins","recMakeTime":"3 mins"},
      {"id":201,"recName":"Sushi","recPreTime":"22 mins","recMakeTime":"17 mins"},
      {"id":301,"recName":"Brownies","recPreTime":"25 mins","recMakeTime":"30 mins"}
    ];

   }

  fetchAllReceipies():Recepie[] {
    return this.recepies;
  }

  addRecepie(rid,rname,rprepTime,rmakeTime) {
     this.recepies.push({"id":rid,"recName":rname,"recPreTime":rprepTime,"recMakeTime":rmakeTime});
  }

  deleteRecepie(i:number) {
        this.recepies.splice(i,1);
  }
  
  assignRatings():Recepie[]{
    for(let receipe of this.recepies) {
      if(receipe.recName=='Eggs') {
         receipe.recRating=4.5;
      }else if(receipe.recName=='Sushi') {
        receipe.recRating=4.6;
      }else if(receipe.recName=='Brownies') {
        receipe.recRating=3.6;
      }
    }
    return this.recepies;
  }
}
