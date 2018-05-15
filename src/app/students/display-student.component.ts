import { Component, OnInit } from '@angular/core';
import {StudentService} from "./service/student.service";

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {
  students : object;

  constructor(private data:StudentService) {
    this.students = [];
  }

  ngOnInit() {
    this.data.getStudents().subscribe((data:any[])=>{
      data.map(v => {
        v.createdAt = v.createdAt.split('T')[0];
      })
      this.students = data;
    })
  }

}
