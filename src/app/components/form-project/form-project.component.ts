import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/class/project';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.scss']
})
export class FormProjectComponent implements OnInit {

  @Input() proj: Project = new Project();
  @Input() receivedProj: Project = new Project();
  @Output() enviarProj: EventEmitter<Project> = new EventEmitter<Project>() 

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.proj.id = this.receivedProj.id;
    this.proj.tituloProyecto = this.receivedProj.tituloProyecto;
    this.proj.tecnologias = this.receivedProj.tecnologias;
    this.proj.descripcionProyecto = this.receivedProj.descripcionProyecto;
    this.proj.linkProyecto = this.receivedProj.linkProyecto;
    this.proj.snapshot = this.receivedProj.snapshot;

    this.enviarProj.emit(this.proj);
  }
}
