import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    console.log("onDelete Edu!");
  }

}
