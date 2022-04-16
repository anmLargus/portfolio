import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../class/job';

@Injectable({
  providedIn: 'root'
})
export class JobServService {

  url:string = 'http://localhost:3001/jobs';
  httpOptions = {
    headers: {
      'content-type': 'application-json'
    }
  };

  //jobs: Job[] = [];    

  constructor(private http:HttpClient) { }

  getJobs():Observable<Job[]> {
    //return this.jobs ;
    return this.http.get<Job[]>(this.url);
  }

  deleteJob(job: Job): Observable<Job> {
    return this.http.delete<Job>(this.url + job.id);
  }

  addJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.url, job, this.httpOptions);
  }
}
