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

  constructor( private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona1(1).subscribe(data => ( this.persona = data) );
  }

}
