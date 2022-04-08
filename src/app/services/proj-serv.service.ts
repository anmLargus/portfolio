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
    /* {
      id: 1,
      tituloProyecto: "Portfolio",
      descripcionProyecto: "Muestrario de habilidades y mi experiencia como programador",
      tecnologias: "angular 13 bootstrap 5",
      linkProyecto: "direccion web del proyecto",
      snapshot: "path al snapshot del proyecto",
    },
    {
      id: 2,
      tituloProyecto: "Fake project",
      descripcionProyecto: "Solo como ejemplo de otro proyecto",
      tecnologias: "tecnologias empleadas: un monton",
      linkProyecto: "direccion web del proyecto",
      snapshot: "path al snapshot del proyecto",
    },
    {
      id: 3,
      tituloProyecto: "Bogus Project",
      descripcionProyecto: "Solo como ejemplo de otro proyecto",
      tecnologias: "tecnologias empleadas: menos que antes",
      linkProyecto: "direccion web del proyecto",
      snapshot: "path al snapshot del proyecto",
    },
  ] */

  constructor(private http:HttpClient) { }

  getProjects():Observable<Project[]> {
    //return this.proyectos ;
    return this.http.get<Project[]>(this.url);
  }
}
