import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { DisplayTeachersComponent } from './teachers/display-teachers.component';
import { AddTeacherComponent } from './teachers/add-teacher/add-teacher.component';
import {Routes,RouterModule} from "@angular/router";
import { DisplaySubjectComponent } from './subject/display-subject.component';
import { AddSubjectComponent } from './subject/add-subject/add-subject.component';
import { DisplayStudentComponent } from './students/display-student.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { SearchByIdComponent } from './students/search-by-id/search-by-id.component';
import { AddStudentToBatchComponent } from './students/add-student-to-batch/add-student-to-batch.component';
import { DisplayCoursesComponent } from './courses/display-courses/display-courses.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { DisplayBatchComponent } from './courses/batches/display-batch.component';
import { AddBatchComponent } from './courses/batches/add-batch.component';
import {TeacherService} from "./teachers/service/teacher.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SubjectService} from "./subject/service/subject.service";
import {CoursesService} from "./courses/service/courses.service";
import {StudentService} from "./students/service/student.service";
import { DisplayStudentBatchComponent } from './students/display-student-batch/display-student-batch.component';

/*const routes: Routes = [
  { path: "", component: DisplayTeachersComponent},
  { path: "teachers", component: DisplayTeachersComponent},
  { path: 'teachers/add', component: AddTeacherComponent},
  {path:"**",redirectTo:"",pathMatch:"full"}
];*/

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DisplayTeachersComponent,
    AddTeacherComponent,
    DisplaySubjectComponent,
    AddSubjectComponent,
    DisplayStudentComponent,
    AddStudentComponent,
    SearchByIdComponent,
    AddStudentToBatchComponent,
    DisplayCoursesComponent,
    AddCourseComponent,
    DisplayBatchComponent,
    AddBatchComponent,
    DisplayStudentBatchComponent,
    DisplayBatchComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: AddTeacherComponent},
      { path: "teachers", component: DisplayTeachersComponent},
      { path: 'teachers/add', component: AddTeacherComponent},

      { path: "subjects", component: DisplaySubjectComponent},
      { path: 'subjects/add', component: AddSubjectComponent},


      { path: 'students', component: DisplayStudentComponent},
      { path: 'students/add', component: AddStudentComponent},
      { path: 'students/search', component: SearchByIdComponent},
      { path: 'students/add/batch', component: AddStudentToBatchComponent},
      { path: 'students/batches/:sid', component: DisplayStudentBatchComponent},

      { path: 'courses', component: DisplayCoursesComponent},
      { path: 'courses/add', component: AddCourseComponent},
      { path: 'courses/batches/:cid', component: DisplayBatchComponent},
      { path: 'courses/addbatch/:cid', component: AddBatchComponent},

      {path:"**",redirectTo:"",pathMatch:"full"},
    ])
  ],
  providers: [TeacherService,
  SubjectService,
    StudentService
  ,CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
