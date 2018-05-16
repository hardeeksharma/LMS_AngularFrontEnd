import {Component, OnInit} from '@angular/core';
import {SubjectService} from "../../subject/service/subject.service";
import {TeacherService} from "../service/teacher.service";
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  subjects: object;

  constructor(private subjectData: SubjectService, private teacherService: TeacherService) {
    this.subjects = [];
  }

  ngOnInit() {
    this.subjectData.getSubjects().subscribe((data) => {
      this.subjects = data;
    })
  }

  addTeacher(fname: string, lname: string, sid: number) {
    let teacher={
      name:fname+ " " + lname
    }
    this.teacherService.addTeacher(JSON.stringify(teacher), sid).subscribe((data) => {
      swal("Good job!", "Teacher Added", "success");
    })

  }

}
