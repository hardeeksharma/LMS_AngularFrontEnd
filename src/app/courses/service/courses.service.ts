import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class CoursesService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    })
  };
  private url: string = "http://localhost:7777/courses";

  private allBatchUrl = "http://localhost:7777/courses/batches/";

  constructor(private http: HttpClient) {
  }

  getCourses() {
    return this.http.get(this.url);
  }

  getAllBatches() {
    return this.http.get(this.allBatchUrl);
  }

}
