import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/class/persona';
import { ConfirmService } from 'src/app/services/confirm.service';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

    persona: Persona = new Persona() ;
  
  constructor( private personaService: PersonaService , private confirmService: ConfirmService) { }

  ngOnInit(): void {
    this.personaService.getPersona1(1).subscribe(data => (this.persona = data) );
  } 
  // Por si deseo usar confirmación para ir a link de yurca
  alertaLink() {
    this.confirmService.confirm({
      title: 'Confirmar', 
      message: 'Este es un link externo',
      estilo: 'primary' //alguno de los colores de bootstrap (primary, info, danger, etc)
    }).then((confirm) => {
      window.location.href = "https://www.instagram.com/yurcabeer/?hl=es-la";
    }, (cancel) => {
        console.log("Cancelado Ir a Yurca");
    });
  }

}
