import { ViewportScroller } from '@angular/common'; // Esto x si uso el scroller
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {

  // constructor( private viewportScroller: ViewportScroller ) { } // x si uso scroller
  constructor( private viewportScroller: ViewportScroller ) { }

  ngOnInit(): void {
  }

  // descomentar si uso el scroller
  /* scrollTo() {
    this.viewportScroller.scrollToAnchor('seccionProyectos');
  } */

}
