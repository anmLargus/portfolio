import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/class/project';
import { ProjServService } from 'src/app/services/proj-serv.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  id: number = 0;
  proj: Project = new Project();

  constructor(
    private projService: ProjServService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.projService.getOneProject(this.id).subscribe( (data: Project) => { this.proj = data } )
  }

  editProject(proyectoEditado: Project) {
    this.projService.updateProject(proyectoEditado).subscribe();
  }

  volverAtras() {
    this.router.navigate(['/editar'])
  }

}
