import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseChildComponent } from './course-child.component';

describe('CourseChildComponent', () => {
  let component: CourseChildComponent;
  let fixture: ComponentFixture<CourseChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
