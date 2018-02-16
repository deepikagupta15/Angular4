import { Component, OnInit,Input,OnChanges,SimpleChanges} from '@angular/core';
import {Course} from '../course';

@Component({
  selector: 'home-course-child',
  templateUrl: './course-child.component.html',
  styleUrls: ['./course-child.component.css']
})
export class CourseChildComponent implements OnInit,OnChanges {
  @Input() courseObject:Course;
  @Input() sampleData:string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges) {
    if(this.sampleData!=undefined) {
      let currentValue = changes.sampleData.currentValue;
      let previousValue = changes.sampleDatapreviousValue;
      console.log("Previous value for String::" + JSON.stringify(previousValue) + 
      "  Current Value for String::" + JSON.stringify(currentValue));
    }
  }
}
