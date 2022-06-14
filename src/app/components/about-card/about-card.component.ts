import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/class/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent implements OnInit {

  persona: Persona = new Persona() ;
  loading = true;

  constructor( private personaService: PersonaService) { }

  iconoLinkedin = "/assets/linkedin.svg";
  iconoGithub = "assets/github.svg";

  ngOnInit(): void {
    this.personaService.getPersona1(27).subscribe(data => {
      this.loading = false;
      this.persona = data
    } );
  }

}
