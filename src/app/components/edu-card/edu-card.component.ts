import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from '../../class/educacion';


@Component({
  selector: 'app-edu-card',
  templateUrl: './edu-card.component.html',
  styleUrls: ['./edu-card.component.scss']
})
export class EduCardComponent implements OnInit {

  @Input() edu: Educacion = new Educacion();

  constructor() { }

  ngOnInit(): void {
  }

}
