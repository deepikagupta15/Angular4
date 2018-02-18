import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { CommonModule } from '@angular/common';

import { RecepieComponent } from '../recepie/recepie.component';
import { RatingComponent } from '../rating/rating.component';
import { CourseComponent } from '../course/course.component';
import { CourseChildComponent } from '../course-child/course-child.component';
import { PostComponent } from '../post/post.component';
import { StudentComponent } from '../student/student.component';
import { PersonComponent } from '../person/person.component';
import { ProductComponent } from '../product/product.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {ProductDetailComponent} from '../product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    // 1. forRoot() is a config method to configure the routes..
    RouterModule.forRoot([
        // path => URL mapping
      {path:'',redirectTo:'/course',pathMatch:'full'},
      {path:'course',component:CourseComponent},
      {path:'person',component:PersonComponent},
      {path:'post',component:PostComponent},
    {path:'productDetails/:pname',component:ProductDetailComponent},
      {path:'product',component:ProductComponent},
        
      {path:'rating',component:RatingComponent},
      {path:'recepie',component:RecepieComponent},
      {path:'student',component:StudentComponent},
      {path:'**',component:NotFoundComponent}
    ])
  ],
  declarations: [],
  // Router Module to be used in another module.
  exports:[RouterModule]
})
export class RoutingModule { }
