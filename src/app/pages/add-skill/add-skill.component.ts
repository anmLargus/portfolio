import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/class/skill';
import { ConfirmService } from 'src/app/services/confirm.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent implements OnInit {

  skill: Skill = new Skill();

  constructor( 
    private skillService: SkillService ,
    private router: Router,
    private confirmService: ConfirmService
    ) { }

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

  confirmarAgregar(skill: Skill) {
    this.confirmService.confirm({
      title: 'Confirmación', 
      message: '¿Agregar una nueva habilidad a su lista?',
      estilo: 'success' //alguno de los colores de bootstrap (primary, info, danger, etc)
    }).then((confirm) => {
        this.agregar(skill);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/editar'])
        });
    }, (cancel) => {
        console.log("Cancelado agregar nueva skill");
    });
  }

}
