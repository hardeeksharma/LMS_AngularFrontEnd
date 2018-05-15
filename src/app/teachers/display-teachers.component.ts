import {Component, OnInit} from '@angular/core';
import {TeacherService} from "./service/teacher.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-display-teachers',
  templateUrl: './display-teachers.component.html',
  styleUrls: ['./display-teachers.component.css']
})
export class DisplayTeachersComponent implements OnInit {

  teachers: object;

  constructor(private data: TeacherService) {
    this.teachers = [];
  }

  ngOnInit() {
    this.data.getTeachers().subscribe((data)=>{
      console.log(data)
      this.teachers = data;
    })
  }

}
