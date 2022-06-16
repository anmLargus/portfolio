import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/class/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.scss']
})
export class EditSkillComponent implements OnInit {

  id: number = 0;
  skill: Skill = new Skill();

  constructor(
    private skillService: SkillService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.skillService.getOneSkill(this.id).subscribe( (data: Skill) => {this.skill = data} );
  }

  edit(skillEditado: Skill) {
    this.skillService.update(skillEditado).subscribe();
    this.volverAtras();
  }

  volverAtras() {
    this.router.navigate( ['/editar']);
  }

}
