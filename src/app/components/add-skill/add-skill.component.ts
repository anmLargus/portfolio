import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/class/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent implements OnInit {

  id: number = 0;
  habilidad: string = "";
  progress: number = 50;

  constructor( private skillService: SkillService ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const skill = new Skill();
    skill.id = this.id;
    skill.habilidad = this.habilidad;
    skill.progress = this.progress;

    this.skillService.addSkill(skill).subscribe();
    console.log("desde add skill")
    console.log(skill)
  }

}
