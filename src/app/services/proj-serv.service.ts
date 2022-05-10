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

  urlProj:string = 'http://localhost:3000/proyectos'; //Cambiar al puerto que corresponda al backend
 
  proyectos: Project[] = [];    

  constructor(private http:HttpClient) { }

  getProjects():Observable<Project[]> {
    //return this.proyectos ;
    return this.http.get<Project[]>(this.urlProj);
  }

  deleteProject(project: Project): Observable<Project> {
    const url = `${this.urlProj}/${project.id}`;
    return this.http.delete<Project>(url);
  }
}
