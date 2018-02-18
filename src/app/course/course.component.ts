import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';
import {Course} from '../course';

@Component({
 
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers:[CourseService]
})
export class CourseComponent implements OnInit {
  courses:Course[];
  courseDefData:Course;
  value:string;

  constructor(private cService:CourseService) { 
    this.value='Techm';
    this.courseDefData={
      courseId:200,
      courseName:'Testing',
      courseDuration:10
    }
  }

  ngOnInit() {
    this.courses=this.cService.getCourses();
  }

}
