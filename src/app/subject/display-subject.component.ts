import {Component, OnInit} from '@angular/core';
import {SubjectService} from "./service/subject.service";

@Component({
  selector: 'app-display-subject',
  templateUrl: './display-subject.component.html',
  styleUrls: ['./display-subject.component.css']
})
export class DisplaySubjectComponent implements OnInit {

  subjects: object;

  constructor(private data: SubjectService) {
    this.subjects = []
  }

  ngOnInit() {
    this.data.getSubjects().subscribe((data) => {
      this.subjects = data;
    })
  }

}
