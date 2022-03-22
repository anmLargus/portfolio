import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/class/project';
import { ProjServService } from 'src/app/services/proj-serv.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  projects: Project[] = [];

  constructor( private projServService: ProjServService ) { }

  ngOnInit(): void {
    this.projects = this.projServService.getProjects() ;
  }

}
