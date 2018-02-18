import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RoutingModule} from './routing/routing.module';

import { AppComponent } from './app.component';
import { RecepieComponent } from './recepie/recepie.component';
import {RecepieService} from './recepie.service';
import { RatingComponent } from './rating/rating.component';
import { PowerPipe } from './power.pipe';
import { CourseComponent } from './course/course.component';
import { CourseChildComponent } from './course-child/course-child.component';
import {PostService} from './post.service';
import {ProductService} from './product.service';
import { PostComponent } from './post/post.component';
import { StudentComponent } from './student/student.component';
import { PersonComponent } from './person/person.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

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
    PersonComponent,
    ProductComponent,
    NotFoundComponent,
    ProductDetailComponent
  ],
  imports: [
    // Array Other Modules the application is dependent upon
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  // Array of services your application is using
  providers: [RecepieService,PostService,ProductService],
  // Root Component
  bootstrap: [AppComponent]
})
export class AppModule { }
