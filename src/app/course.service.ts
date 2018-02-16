import { Injectable } from '@angular/core';
import {Course} from './course';

@Injectable()
export class CourseService {
  courses:Course[];

  constructor() {
    this.courses=[
      {"courseId":101,"courseName":'Angular 4',"courseDuration":16},
      {"courseId":102,"courseName":'Node JS',"courseDuration":12},
      {"courseId":103,"courseName":'Express JS',"courseDuration":15},
      {"courseId":104,"courseName":'Mongo DB',"courseDuration":10},
      {"courseId":105,"courseName":'MEAN Stack',"courseDuration":8}
    ];

   }

   getCourses():Course[] {
      return this.courses;
   }

}
