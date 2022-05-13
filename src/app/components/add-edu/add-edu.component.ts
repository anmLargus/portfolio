import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from '../../class/educacion';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.scss']
})
export class AddEduComponent implements OnInit {

  id: number = 0;
  titulo: string = "";
  anioFin: number = 1979; 
  lugar: string = "";
  descripcion: string = "" ;
  calificacion?: number = 10;   

  constructor( private educacionService: EducacionService ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const edu = new Educacion();
    edu.id = this.id;
    edu.titulo = this.titulo;
    edu.anioFin = this.anioFin;
    edu.lugar = this.lugar;
    edu.descripcion = this.descripcion;
    edu.calificacion = this.calificacion;

    this.educacionService.addEdu(edu).subscribe();

  }

}
