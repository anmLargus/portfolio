import { Component } from '@angular/core';
import { NavLink } from './class/nav-link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  links: NavLink[] = [
    {label: 'Proyectos', link: 'proyectos'},
    {label: 'Sobre mí', link: 'about'},
    {label: 'Contacto', link: 'contacto'}
  ]
}
