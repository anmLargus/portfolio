import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/class/skill';

@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  styleUrls: ['./form-skill.component.scss']
})
export class FormSkillComponent implements OnInit {

 

  @Input() skill: Skill = new Skill();
  @Input() receivedSkill: Skill = new Skill();
  @Output() enviarSkill = new EventEmitter<Skill>(); 

  constructor(  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.skill.id = this.receivedSkill.id;
    this.skill.habilidad = this.receivedSkill.habilidad;
    this.skill.progress = this.receivedSkill.progress;

    this.enviarSkill.emit(this.skill);
  }

}
