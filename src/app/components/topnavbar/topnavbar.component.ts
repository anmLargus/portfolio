import { ViewportScroller } from '@angular/common'; // Esto x si uso el scroller
import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from 'src/app/class/nav-link';
import { Persona } from 'src/app/class/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {

  persona: Persona = new Persona;
  
  @Input() links: NavLink[] = []; // Crea un array vacío para llenarlo con los links para el navbar

  // constructor( private viewportScroller: ViewportScroller ) { } // x si uso scroller
  constructor( 
    private viewportScroller: ViewportScroller, 
    private personaService: PersonaService
    ) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => (this.persona = data) );
  }

  // descomentar si uso el scroller
  /* scrollTo() {
    this.viewportScroller.scrollToAnchor('seccionProyectos');
  } */

}
