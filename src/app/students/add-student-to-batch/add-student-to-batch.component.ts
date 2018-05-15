import {Component, OnInit} from '@angular/core';
import {StudentService} from "../service/student.service";
import {CoursesService} from "../../courses/service/courses.service";

@Component({
  selector: 'app-add-student-to-batch',
  templateUrl: './add-student-to-batch.component.html',
  styleUrls: ['./add-student-to-batch.component.css']
})
export class AddStudentToBatchComponent implements OnInit {

  students: object;
  batches: object;

  constructor(private sdata: StudentService, private bdata: CoursesService) {
    this.students = [];
    this.batches = [];
  }

  ngOnInit() {
    this.bdata.getAllBatches().subscribe((data) => {
      this.batches = data;
    })
  }

}
