import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { RecepieComponent } from './recepie/recepie.component';
import {RecepieService} from './recepie.service';
import { RatingComponent } from './rating/rating.component';
import { PowerPipe } from './power.pipe';
import { CourseComponent } from './course/course.component';
import { CourseChildComponent } from './course-child/course-child.component';
import {PostService} from './post.service';
import { PostComponent } from './post/post.component';
import { StudentComponent } from './student/student.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    // Array of All Components, Directives , pipes
    AppComponent,
    RecepieComponent,
    RatingComponent,
    PowerPipe,
    CourseComponent,
    CourseChildComponent,
    PostComponent,
    StudentComponent,
    PersonComponent
  ],
  imports: [
    // Array Other Modules the application is dependent upon
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  // Array of services your application is using
  providers: [RecepieService,PostService],
  // Root Component
  bootstrap: [AppComponent]
})
export class AppModule { }
