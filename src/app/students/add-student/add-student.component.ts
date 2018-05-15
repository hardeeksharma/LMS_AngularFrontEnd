import {Component, OnInit} from '@angular/core';
import {StudentService} from "../service/student.service";
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private data: StudentService) {
  }

  ngOnInit() {
  }

  newStudent(name: string) {

    if (name.trim() == null || name.trim() == "") {
      swal("Error", "Name can not be empty", "error");
      return;
    }

    let newStud = {
      name: name
    };

    this.data.addNewStudent(newStud).subscribe((data: any) => {
      if (data.name) {
        swal("Good job!", "Student Added", "success");
      }
      else
        swal("Error!!!", "Student Add failed", "error");
    })
  }

}
