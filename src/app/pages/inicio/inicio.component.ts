import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/class/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  persona: Persona = new Persona;

  images = [
    "assets/escritorio3.png",
    "assets/RStudio.png",
    "assets/pantallaVisualStudio.png"
  ]

  iconoLinkedin = "/assets/linkedin.svg";
  iconoGithub = "assets/github.svg";

  constructor( private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona1(1).subscribe(data => (this.persona = data) );
  }

}
