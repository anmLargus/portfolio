import { Injectable } from '@angular/core';
import { Project } from '../class/project';

@Injectable({
  providedIn: 'root'
})
export class ProjServService {

  proyectos: Project[] = [
    {
      id: 1;
      tituloProyecto: "Portfolio",
      descripcionProyecto: "Muestrario de habilidades y mi experiencia como programador",
      tecnologias: "angular 13 bootstrap 5",
      linkProyecto: "direccion web del proyecto",
      snapshot: "path al snapshot del proyecto"
    },
    {
      id: 2;
      tituloProyecto: "Proyecto Fake",
      descripcionProyecto: "Solo como ejemplo de otro proyecto",
      tecnologias: "un monton",
      linkProyecto: "direccion web del proyecto",
      snapshot: "path al snapshot del proyecto"
    },
  ]

  constructor() { }
}
