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

  //miFoto = "assets/yoCircle1.jpg" ; // assets/yoCircle1.jpg

  constructor( private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => (this.persona = data) );
  }

}
