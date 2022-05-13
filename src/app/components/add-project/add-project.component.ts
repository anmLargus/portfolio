import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/class/project';
import { ProjServService } from 'src/app/services/proj-serv.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  id: number = 0;
  tituloProyecto: string = "";
  descripcionProyecto: string = "";
  tecnologias: string = "";
  linkProyecto: string = "";
  snapshot: string = "";

  constructor( private projServ: ProjServService ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const proj = new Project();
    proj.id = this.id;
    proj.tituloProyecto = this.tituloProyecto;
    proj.descripcionProyecto = this.descripcionProyecto;
    proj.tecnologias = this.tecnologias;
    proj.snapshot = this.snapshot;

    this.projServ.addProject(proj).subscribe();
  }

}
