import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../service/student.service";

@Component({
  selector: 'app-display-student-batch',
  templateUrl: './display-student-batch.component.html',
  styleUrls: ['./display-student-batch.component.css']
})
export class DisplayStudentBatchComponent implements OnInit {
  studentname: string
  sid: number;
  batches: object;

  constructor(private route: ActivatedRoute, private data: StudentService) {
    this.studentname = this.route.snapshot.queryParams["studentname"] || "";
    this.sid = this.route.snapshot.params['sid'];
    this.batches = [];
  }

  ngOnInit() {
    this.data.getStudentBatches(this.sid).subscribe((data) => {
      this.batches = data[0].Batches;
      console.log(this.batches);
    })
  }

}
