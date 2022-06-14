import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/class/skill';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmService } from 'src/app/services/confirm.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-flyer',
  templateUrl: './skill-flyer.component.html',
  styleUrls: ['./skill-flyer.component.scss']
})
export class SkillFlyerComponent implements OnInit {

  skills: Skill[] = [];
  loading = true
  isLogged = false; // isLogged le pasa la variable al atributo esBorrable del componente skillCard. Si está aparecerá el botón de borrar

  constructor( 
    private skillService: SkillService,
    private auth: AuthService, 
    private confirmService: ConfirmService  
  ) { }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe(data => { 
      this.loading = false; 
      this.skills = data
    });

    this.isLogged = this.auth.isLogged();
  }

  confirmDeleteSkill(skill: Skill) {
    this.confirmService.confirm({
      title: 'Confirme eliminar ítem de sus habilidades', 
      message: '¿Está seguro de querer eliminarlo? Esta acción no puede volver atrás',
      estilo: 'danger' //alguno de los colores de bootstrap (primary, info, danger, etc)
    }).then((confirm) => {
        this.deleteSkill(skill);
    }, (cancel) => {
        console.log("Cancelado borrar ítem");
    });
  }

  deleteSkill(skill: Skill) {
    this.skillService.deleteSkill(skill).subscribe( ( ) => ( this.skills = this.skills.filter((p) => p.id !== skill.id)));
  }

}
