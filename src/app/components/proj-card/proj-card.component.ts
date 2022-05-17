import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/class/project';
import { BaseCardComponent } from '../base-card/base-card.component';

@Component({
  selector: 'app-proj-card',
  templateUrl: './proj-card.component.html',
  styleUrls: ['./proj-card.component.scss']
})
export class ProjCardComponent extends BaseCardComponent implements OnInit {
  
  @Input() project: Project = new Project();
  @Output() onDeleteProject: EventEmitter<Project> = new EventEmitter();

  constructor() {
    super();
  }

  override ngOnInit(): void {
  }

  onDelete(project: Project) {
    this.onDeleteProject.emit(project);
  }

}
