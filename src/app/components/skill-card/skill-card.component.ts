import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { Skill } from 'src/app/class/skill';



@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  //esBorrable = false;
  faCircleMinus = faCircleMinus;

  @Input() esBorrable: boolean = false;
  @Input() skill: Skill = new Skill() ;
  @Output() onDeleteSkill: EventEmitter<Skill> = new EventEmitter();

  public progreso = this.skill.progress ; // no se muy bien que función cumple esto

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(skill: Skill) {
    this.onDeleteSkill.emit(skill);
  }

}
