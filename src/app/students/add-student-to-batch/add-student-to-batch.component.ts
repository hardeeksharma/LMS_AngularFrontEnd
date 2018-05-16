import {Component, OnInit} from '@angular/core';
import {StudentService} from "../service/student.service";
import {CoursesService} from "../../courses/service/courses.service";
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
import {ActivatedRoute} from "@angular/router";

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-add-student-to-batch',
  templateUrl: './add-student-to-batch.component.html',
  styleUrls: ['./add-student-to-batch.component.css']
})
export class AddStudentToBatchComponent implements OnInit {

  studentname: string;
  students: object;
  batches: object;
  courses: object;
  sid: number;

  constructor(private sdata: StudentService, private bdata: CoursesService,
              private route: ActivatedRoute) {
    this.students = [];
    this.sid = this.route.snapshot.params['sid'];
    this.studentname = this.route.snapshot.queryParams['studentname'] + " (ID :" + this.sid + ")";
    this.batches = [];
    this.courses = [];
  }

  ngOnInit() {
    this.bdata.getCourses().subscribe((data) => {
      this.courses = data;
      console.log(this.courses)
    })
  }

  getBatchByCourse(cid: number) {
    if (cid == -1) {
      swal("Error", "Select Course first", "error");
    }
    else {
      this.bdata.getBatchByCourse(cid).subscribe((data: any) => {
        this.batches = data;
      })
    }
  }

  addStudentToBatch(cid: number, bid: number) {
    console.log(cid);
    console.log(bid);
    this.bdata.addStudentToBatch(cid, bid, this.sid).subscribe((data: any) => {
      swal("Good job!", "Student Added To Batch", "success");

    })
  }

}
