import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-display-batch',
  templateUrl: './display-batch.component.html',
  styleUrls: ['./display-batch.component.css']
})
export class DisplayBatchComponent implements OnInit {
  studentname:string
  constructor(private route:ActivatedRoute) {
    this.studentname = this.route.snapshot.queryParams["studentname"]||"";
  }

  ngOnInit() {
  }

}
