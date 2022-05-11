import { Component, Input, OnInit } from '@angular/core';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { Skill } from 'src/app/class/skill';



@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  esBorrable = true;
  faCircleMinus = faCircleMinus;

  @Input() skill: Skill = new Skill() ;

  public progreso = this.skill.progress ; // no se muy bien que función cumple esto

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    console.log("onDelete skill!");
  }

}
