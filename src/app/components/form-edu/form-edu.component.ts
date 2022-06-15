import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/class/educacion';

@Component({
  selector: 'app-form-edu',
  templateUrl: './form-edu.component.html',
  styleUrls: ['./form-edu.component.scss']
})
export class FormEduComponent implements OnInit {

  id: number = 0;
  titulo: string = "";
  anioFin: number = 1979; 
  lugar: string = "";
  descripcion: string = "" ;

  @Input() edu: Educacion = new Educacion();
  @Input() receivedEdu: Educacion = new Educacion();
  @Output() enviarEdu: EventEmitter<Educacion> = new EventEmitter<Educacion>();

  constructor(  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.edu.id = this.receivedEdu.id;
    this.edu.titulo = this.receivedEdu.titulo;
    this.edu.anioFin = this.receivedEdu.anioFin;
    this.edu.lugar = this.receivedEdu.lugar;
    this.edu.descripcion = this.receivedEdu.descripcion;

    this.enviarEdu.emit(this.edu);
  }

}
