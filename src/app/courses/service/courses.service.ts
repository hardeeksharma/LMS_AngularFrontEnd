import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {stringDistance} from "codelyzer/util/utils";

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

  getBatchByCourse(cid: number) {
    let url: string = "http://localhost:7777/courses/" + cid + "/batches";
    return this.http.get(url);
  }



  addStudentToBatch(cid: number, bid: number, sid: number) {
    //localhost:7777/students/4/courses/2/batches/1
    let url = "http://localhost:7777/students/" + sid + "/courses/" + cid + "/batches/" + bid;
    return this.http.post(url, null, this.httpOptions);
  }

}
