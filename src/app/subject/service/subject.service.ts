import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class SubjectService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    })
  };
  private url: string = "http://localhost:7777/subjects";
  private URL_NEW_SUBJECT: string = "http://localhost:7777/subjects/courses/";

  constructor(private http: HttpClient) {
  }

  getSubjects() {
    return this.http.get(this.url);
  }

  addSubject(subject) {
    return this.http.post(this.URL_NEW_SUBJECT + subject.cid, JSON.stringify(subject), this.httpOptions);
  }

}
