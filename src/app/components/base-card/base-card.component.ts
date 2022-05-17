// ESTE COMPONENTE CONTIENE PARTES COMUNES A OTRAS CARD.COMPONENT

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-base-card',
  template: '',
  styles: []
})
export class BaseCardComponent implements OnInit {

  faCircleMinus = faCircleMinus;

  @Input() esBorrable: boolean = false;

  //@Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /*
  emitDelete(model: any) {
		this.onDelete.emit(model);
  }
  */
}
