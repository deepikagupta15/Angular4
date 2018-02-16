import { Component, OnInit } from '@angular/core';
import {RecepieService} from '../recepie.service';
import {Recepie} from '../receipe';

@Component({
  selector: 'home-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  recepies:Recepie[];

// DI 
  constructor(private recService:RecepieService) { 
    
    this.recepies = this.recService.assignRatings();
  }

  ngOnInit() {
  }

}
