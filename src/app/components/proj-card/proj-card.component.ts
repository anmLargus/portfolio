import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/class/project';

@Component({
  selector: 'app-proj-card',
  templateUrl: './proj-card.component.html',
  styleUrls: ['./proj-card.component.scss']
})
export class ProjCardComponent implements OnInit {
  
  faCircleMinus = faCircleMinus;

  @Input() project: Project = new Project();
  @Input() esBorrable = false;
  @Output() onDeleteProject: EventEmitter<Project> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(project: Project) {
    this.onDeleteProject.emit(project);
  }

}
