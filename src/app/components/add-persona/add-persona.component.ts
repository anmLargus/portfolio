import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/class/persona';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.scss']
})
export class AddPersonaComponent implements OnInit {
  
  id?: number = 1 ;
  nombre: string = "john";
  apellido: string = "doe";
  parrafoPresentacion: string = "up to 200 words";
  frasePresentacion: string = "up to 280 characters";
  linkFoto: string = "http://facebook.com.....";
  linkedin: string = "http://linkedin.com.....";
  github: string = "http://github.com.....";
  redSocial1?: string = "Otra red social";
  redSocial2?: string = "Otra red social";

  constructor( private personaService: PersonaService ) { }

  ngOnInit(): void {
    //this.personaService.getPersona().subscribe( res => { this.persona = res } );     
  }

  updatePersona() {
    const {id, nombre, apellido, parrafoPresentacion, frasePresentacion, linkFoto, linkedin, github, redSocial1, redSocial2} = this;
    const persona = {id, nombre, apellido, parrafoPresentacion, frasePresentacion, linkFoto, linkedin, github, redSocial1, redSocial2}

    this.personaService.updatePersona(persona).subscribe( response => { console.log(response) } );
  }



}
