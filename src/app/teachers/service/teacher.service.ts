import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class TeacherService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    })
  };
  private url: string = "http://localhost:7777/teachers/";

  constructor(private http: HttpClient) {
  }

  getTeachers() {
    return this.http.get(this.url);
  }

  addTeacher(teacher: string, sid: number) {
    return this.http.post(this.url + sid, teacher, this.httpOptions)
  }
}
