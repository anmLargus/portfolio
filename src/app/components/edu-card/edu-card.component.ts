import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { Educacion } from '../../class/educacion';


@Component({
  selector: 'app-edu-card',
  templateUrl: './edu-card.component.html',
  styleUrls: ['./edu-card.component.scss']
})
export class EduCardComponent implements OnInit {

  esBorrable = true;
  faCircleMinus = faCircleMinus;

  @Input() edu: Educacion = new Educacion();
  @Output() onDeleteEdu: EventEmitter<Educacion> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(edu: Educacion) {
    console.log("DELETE !");
    console.log(edu);
    this.onDeleteEdu.emit(edu);
  }

}
