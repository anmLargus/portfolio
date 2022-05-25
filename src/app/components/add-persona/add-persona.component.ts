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
  nombre: string = "Juan";
  apellido: string = "Perez";
  email: string = "juanperez@fake.com";
  parrafoPresentacion: string = "Aquí un párrafo de hasta 180 palabras";
  frasePresentacion: string = "Frase de hasta 280 caracteres";
  linkFoto: string = "url a su Foto";
  linkedin: string = "linkedin.com...";
  github: string = "github.com...";
  redSocial?: string = "Instagram...?"; 
  

  constructor( private personaService: PersonaService ) { }

  ngOnInit(): void {  }

  updatePersona() {
    const {id, nombre, apellido, email, parrafoPresentacion, frasePresentacion, linkFoto, linkedin, github, redSocial} = this;
    const persona = {id, nombre, apellido, email, parrafoPresentacion, frasePresentacion, linkFoto, linkedin, github, redSocial}

    this.personaService.updatePersona(persona).subscribe( response => { console.log(response) } );
  }



}
