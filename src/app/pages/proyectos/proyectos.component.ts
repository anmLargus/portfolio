import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/class/project';
import { AuthService } from 'src/app/services/auth.service';
import { ProjServService } from 'src/app/services/proj-serv.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  projects: Project[] = [];
  isLogged = false;
  loading = true;

  constructor( private projServService: ProjServService , private auth: AuthService ) { }

  ngOnInit(): void {
    this.projServService.getProjects().subscribe(data => {
      this.loading = false;
      this.projects = data;          
    }) ;

    this.isLogged = this.auth.isLogged();
  }

  deleteProject(project: Project) {
    this.projServService.deleteProject(project)
      .subscribe( ( ) => ( this.projects = this.projects.filter( (p) => p.id !== project.id ) ) );
  }

}
