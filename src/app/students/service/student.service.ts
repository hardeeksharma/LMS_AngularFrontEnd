import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class StudentService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    })
  };

  private url: string = "http://localhost:7777/students/";

  constructor(private http: HttpClient) {
  }

  getStudents() {
    return this.http.get(this.url);
  }

  addNewStudent(student: object) {
    return this.http.post(this.url, JSON.stringify(student), this.httpOptions);
  }

  getStudentById(id: number) {
    return this.http.get(this.url + id);
  }

  getStudentBatches(sid: number) {
    let getBatchUrl = this.url + sid + '/batches';
    return this.http.get(getBatchUrl);
  }


}
