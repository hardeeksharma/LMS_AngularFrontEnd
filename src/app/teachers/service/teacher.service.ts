import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class TeacherService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    })
  };
  private url: string = "https://lmsapiexpress.herokuapp.com/teachers/";

  constructor(private http: HttpClient) {
  }

  getTeachers() {
    return this.http.get(this.url);
  }

  addTeacher(teacher: string, sid: number) {
    return this.http.post(this.url + sid, teacher, this.httpOptions)
  }
}
