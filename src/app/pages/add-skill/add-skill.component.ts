import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/class/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent implements OnInit {

  skill: Skill = new Skill();

  constructor( private skillService: SkillService ) { }

  ngOnInit(): void {
  }

  agregar(skill: Skill) {
    this.skillService.addSkill(skill).subscribe(
      {
        next: (data: any) => {},
        error: (response : any) => {
          alert("Hubo un error")
         console.log(response.error);
        }
      }
    );
  }

}
