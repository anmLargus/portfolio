import { Component } from '@angular/core';
import { NavLink } from './class/nav-link';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';  

  //menú del navbar
  links: NavLink[] = [
    {label: 'Sobre mí', link: 'about'},
   // {label: 'Contacto', link: 'contacto'},
    {label: 'Editar', link: 'editar-landing'}
  ]
}
