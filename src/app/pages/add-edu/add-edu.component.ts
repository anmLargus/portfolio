import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/class/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.scss']
})
export class AddEduComponent implements OnInit {

  constructor( private eduService: EducacionService ) { }

  ngOnInit(): void {
  }

  agregarEdu(edu: Educacion) {
    this.eduService.addEdu(edu).subscribe();
  }

}
