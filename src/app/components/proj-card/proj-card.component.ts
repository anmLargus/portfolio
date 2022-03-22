import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/class/project';

@Component({
  selector: 'app-proj-card',
  templateUrl: './proj-card.component.html',
  styleUrls: ['./proj-card.component.scss']
})
export class ProjCardComponent implements OnInit {

  @Input() project: Project = new Project();

  constructor() { }

  ngOnInit(): void {
  }

}
