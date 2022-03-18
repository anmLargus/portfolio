import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/class/skill';


@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() skill: Skill = new Skill() ;

  public progreso = this.skill.progress ; // no se muy bien que función cumple esto

  constructor() { }

  ngOnInit(): void {
  }

}
