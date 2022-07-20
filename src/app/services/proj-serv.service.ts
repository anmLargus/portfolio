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

  //Cambiar al puerto que corresponda al backend
  urlProj:string = "https://morning-spire-26047.herokuapp.com/api/proyectos" /* 'http://localhost:3000/projs';  'http://localhost:8081/api/proyectos' */ ;
 
  constructor(private http:HttpClient) { }

  getProjects():Observable<Project[]> {

    return this.http.get<Project[]>(this.urlProj);
  }

  getOneProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.urlProj}/${id}`);
  }

  deleteProject(project: Project): Observable<Project> {
    const url = `${this.urlProj}/${project.id}`;
    return this.http.delete<Project>(url);
  }

  addProject(proj: Project): Observable<Project> {
    return this.http.post<Project>(this.urlProj, proj, httpOptions);
  }

  updateProject(proj: Project): Observable<Project> {
    const url = `${this.urlProj}/${proj.id}`;
    return this.http.put<Project>(url, proj, httpOptions);
  }

}
