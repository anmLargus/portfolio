import { Component, Input, OnInit } from '@angular/core';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/class/project';

@Component({
  selector: 'app-proj-card',
  templateUrl: './proj-card.component.html',
  styleUrls: ['./proj-card.component.scss']
})
export class ProjCardComponent implements OnInit {

  esBorrable = true;
  faCircleMinus = faCircleMinus;

  @Input() project: Project = new Project();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    console.log("onDelete proyecto!");
  }

}
