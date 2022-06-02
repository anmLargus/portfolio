// ESTE COMPONENTE CONTIENE PARTES COMUNES A OTRAS CARD.COMPONENT
// No pude hacer funcionar output con eventemitter
import { Component, Input, OnInit } from '@angular/core';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-base-card',
  template: '',
  styles: []
})
export class BaseCardComponent implements OnInit {

  faCircleMinus = faCircleMinus;
  faPen = faPen;

  @Input() esEditable: boolean = false;

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
