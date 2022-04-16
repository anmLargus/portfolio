import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../class/project';

@Injectable({
  providedIn: 'root'
})
export class ProjServService {

  url:string = 'http://localhost:3002/projs';
  httpOptions = {
    headers: {
      'content-type': 'application-json'
    }
  };

  proyectos: Project[] = [];
    

  constructor(private http:HttpClient) { }

  getProjects():Observable<Project[]> {
    //return this.proyectos ;
    return this.http.get<Project[]>(this.url);
  }
}
