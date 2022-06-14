import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/class/project';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmService } from 'src/app/services/confirm.service';
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

  constructor(
    private projServService: ProjServService , 
    private auth: AuthService,
    private confirmService: ConfirmService
  ) { }

  ngOnInit(): void {
    this.projServService.getProjects().subscribe(data => {
      this.loading = false;
      this.projects = data;          
    }) ;

    this.isLogged = this.auth.isLogged();
  }

  confirmDeleteProject(project: Project) {
    this.confirmService.confirm({
      title: 'Confirme eliminar ítem de sus Proyectos', 
      message: '¿Está seguro de querer eliminarlo? Esta acción no puede volver atrás',
      estilo: 'danger' //alguno de los colores de bootstrap (primary, info, danger, etc)
    }).then((confirm) => {
        this.deleteProject(project);
    }, (cancel) => {
        console.log("Cancelado borrar ítem");
    });
  }

  deleteProject(project: Project) {
    this.projServService.deleteProject(project)
      .subscribe( ( ) => ( this.projects = this.projects.filter( (p) => p.id !== project.id ) ) );
  }

}
