import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../class/project';

const httpOptions = {
  headers: new HttpHeaders( { 'Content-Type':'application/json' } )
}

@Injectable({
  providedIn: 'root'
})
export class ProjServService {

  urlProj:string = 'http://localhost:3000/projs';
 
  proyectos: Project[] = [];    

  constructor(private http:HttpClient) { }

  getProjects():Observable<Project[]> {
    //return this.proyectos ;
    return this.http.get<Project[]>(this.urlProj);
  }
}
