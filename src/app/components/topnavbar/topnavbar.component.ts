import { ViewportScroller } from '@angular/common'; // Esto x si uso el scroller
import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from 'src/app/class/nav-link';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {

  @Input() links: NavLink[] = []; // Crea un array vacío para llenarlo con los links para el navbar

  // constructor( private viewportScroller: ViewportScroller ) { } // x si uso scroller
  constructor( private viewportScroller: ViewportScroller ) { }

  ngOnInit(): void {
  }

  // descomentar si uso el scroller
  /* scrollTo() {
    this.viewportScroller.scrollToAnchor('seccionProyectos');
  } */

}
