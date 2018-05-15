import {Component, OnInit} from '@angular/core';
import * as _swal from 'sweetalert';
import {SweetAlert} from 'sweetalert/typings/core';
import {StudentService} from "../service/student.service";

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-search-by-id',
  templateUrl: './search-by-id.component.html',
  styleUrls: ['./search-by-id.component.css']
})
export class SearchByIdComponent implements OnInit {

  students: object[];

  constructor(private data: StudentService) {
    this.students = [];
  }

  ngOnInit() {
    this.data.getStudents().subscribe((data: any[]) => {
      data.map(v => {
        v.createdAt = v.createdAt.split('T')[0];
      })
      this.students = data;
    })
  }

  filterStudents(val: string) {
    this.data.getStudents().subscribe((data: any[]) => {
      data.map(v => {
        v.createdAt = v.createdAt.split('T')[0];
      })
      this.students = data;
      if(val!='')
      this.students = this.students.filter((value:any) => {
        return value.id==val;
      })
    })

  }

}
