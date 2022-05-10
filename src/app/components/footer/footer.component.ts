import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/class/persona';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  //public persona = {nombre: "Andrés", apellido: "Martin"}; //TODO RECIBIR ESTO DESDE LA DB
  persona: Persona = new Persona() ;
  
  constructor( private personaService: PersonaService ) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => (this.persona = data) );
  }
  

 

}
