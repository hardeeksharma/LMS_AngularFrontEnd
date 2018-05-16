import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class CoursesService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    })
  };
  private url: string = "https://lmsapiexpress.herokuapp.com/courses";

  private allBatchUrl = "https://lmsapiexpress.herokuapp.com/batches/";

  constructor(private http: HttpClient) {
  }

  getCourses() {
    return this.http.get(this.url);
  }

  getAllBatches() {
    return this.http.get(this.allBatchUrl);
  }

}
