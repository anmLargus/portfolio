import { ViewportScroller } from '@angular/common'; // Esto x si uso el scroller
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavLink } from 'src/app/class/nav-link';
import { Persona } from 'src/app/class/persona';
import { AuthService } from 'src/app/services/auth.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {

  public isMenuCollapsed = true;

  logo = "/assets/APLogo-v7.png";

  mostrar: boolean = true //this.auth.isLogged();

  persona: Persona = new Persona;
  
  @Input() links: NavLink[] = []; // Crea un array vacío para llenarlo con los links para el navbar

  constructor( 
    private viewportScroller: ViewportScroller, 
    private personaService: PersonaService,
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.personaService.getPersona1(1).subscribe(data => (this.persona = data) );
    this.mostrar = this.auth.isLogged();
  }

  // descomentar si uso el scroller
  /* scrollTo() {
    this.viewportScroller.scrollToAnchor('seccionProyectos');
  } */

 

}
