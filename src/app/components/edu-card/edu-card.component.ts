import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from '../../class/educacion';
import { BaseCardComponent } from '../base-card/base-card.component';

@Component({
  selector: 'app-edu-card',
  templateUrl: './edu-card.component.html',
  styleUrls: ['./edu-card.component.scss']
})
export class EduCardComponent extends BaseCardComponent implements OnInit {
  
  @Input() edu: Educacion = new Educacion();
  @Output() onDeleteEdu: EventEmitter<Educacion> = new EventEmitter();
  @Output() onEditEdu: EventEmitter<Educacion> = new EventEmitter();

  constructor() {
    super();
  }

  override ngOnInit(): void {
  }

  onDelete(edu: Educacion) {
    this.onDeleteEdu.emit(edu);
  }

  onEdit(edu: Educacion) {
    console.log("Presionó Editar!!")
    this.onEditEdu.emit(edu)
  }

}
