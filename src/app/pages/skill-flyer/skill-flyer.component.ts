import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/class/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-flyer',
  templateUrl: './skill-flyer.component.html',
  styleUrls: ['./skill-flyer.component.scss']
})
export class SkillFlyerComponent implements OnInit {

  skills: Skill[] = [];

  constructor( private skillService: SkillService ) { }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe(data => (this.skills = data))
  }

}
