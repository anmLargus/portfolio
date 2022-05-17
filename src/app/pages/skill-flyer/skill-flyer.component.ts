import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/class/skill';
import { AuthService } from 'src/app/services/auth.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-flyer',
  templateUrl: './skill-flyer.component.html',
  styleUrls: ['./skill-flyer.component.scss']
})
export class SkillFlyerComponent implements OnInit {

  skills: Skill[] = [];

  isLogged = false; // isLogged le pasa la variable al atributo esBorrable del componente skillCard. Si está aparecerá el botón de borrar

  constructor( private skillService: SkillService , private auth: AuthService ) { }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe(data => (this.skills = data));

    this.isLogged = this.auth.isLogged();
  }

  deleteSkill(skill: Skill) {
    this.skillService.deleteSkill(skill).subscribe( ( ) => ( this.skills = this.skills.filter((p) => p.id !== skill.id)));
  }

}
