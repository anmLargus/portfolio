import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/class/project';
import { ProjServService } from 'src/app/services/proj-serv.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  constructor( private projService: ProjServService ) { }

  ngOnInit(): void {
  }

  agregar(proj: Project) {
    this.projService.addProject(proj).subscribe();
  }

}
