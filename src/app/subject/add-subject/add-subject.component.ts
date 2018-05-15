import {Component, OnInit} from '@angular/core';
import {SubjectService} from "../service/subject.service";
import {CoursesService} from "../../courses/service/courses.service";
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  courses: object

  constructor(private data: SubjectService, private courseData: CoursesService) {
    this.courses = [];
  }

  ngOnInit() {
    this.courseData.getCourses().subscribe((data) => {
      console.log(data)
      this.courses = data;
    })
  }

  newSubject(name: string, cid: number) {
    let newSubject = {
      name: name,
      cid: cid
    };

    this.data.addSubject(newSubject).subscribe((data: any) => {
      if (data.name) {
        swal("Good job!", "Subject Added To Course", "success");
      }
    })

  }

}
