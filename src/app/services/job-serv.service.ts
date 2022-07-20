import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../class/job';

const httpOptions = {
  headers: new HttpHeaders( { 'Content-Type':'application/json' } )
}

@Injectable({
  providedIn: 'root'
})
export class JobServService {

  //Cambiar al puerto que corresponda al backend
  urlJob:string = "https://morning-spire-26047.herokuapp.com/api/jobs" /* 'http://localhost:3000/jobs';   'http://localhost:8081/api/jobs' */ ;
  

  constructor(private http:HttpClient) { }

  getJobs():Observable<Job[]> {

    return this.http.get<Job[]>(this.urlJob);
  }

  getOneJob(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.urlJob}/${id}`); // 
  }

  deleteJob(job: Job): Observable<Job> {
    const url = `${this.urlJob}/${job.id}`;
    return this.http.delete<Job>(url);
  }  

  addJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.urlJob, job, httpOptions);
  }  

  update(job: Job): Observable<Job> {
    const url = `${this.urlJob}/${job.id}`;
    return this.http.put<Job>(url, job, httpOptions);
  }
}
