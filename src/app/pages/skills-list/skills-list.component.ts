import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/class/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {

  skills: Skill[] = [];

  constructor( private skillService: SkillService ) {  } 

  ngOnInit(): void {

    this.skillService.getSkills().subscribe(data => {
      this.skills = data
      console.log("skills desde el servidor")
    });
    
  }

  

}

