import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/class/skill';
import { BaseCardComponent } from '../base-card/base-card.component';



@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent extends BaseCardComponent implements OnInit {

  @Input() skill: Skill = new Skill() ;
  @Output() onDeleteSkill: EventEmitter<Skill> = new EventEmitter();

  public progreso = this.skill.progress ; // no se muy bien que función cumple esto

  constructor() {
    super();
  }

  override ngOnInit(): void {
  }

  onDelete(skill: Skill) {
    this.onDeleteSkill.emit(skill);
  }

}
