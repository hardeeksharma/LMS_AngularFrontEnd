import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../students/service/student.service";

@Component({
  selector: 'app-display-batch',
  templateUrl: './display-batch.component.html',
  styleUrls: ['./display-batch.component.css']
})
export class DisplayBatchComponent implements OnInit {

  batches: object

  constructor(private data: StudentService) {
    this.batches = [];
  }

  ngOnInit() {

  }

}
