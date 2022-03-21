import { Injectable } from '@angular/core';
import { Educacion } from '../class/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educacion: Educacion[] = [
    {
      id: 1,
      titulo: "Ingeniero Agrónomo";
      anio: 2009; // Podria ser date?
      institucion: "Facultad de Agronomía Universidad de Buenos Aires";
      descripcionCurso: "";  // Aca irian los directores del curso o de mi posgrado (opc)
      duracion: ; // duracion en horas (opc)
      calificacion: 7.08;  // (opc)
    },
    {
      id: 2;   // (opc)
      titulo: "Doctor en Ciencias Agropecuarias";
      anio: 2017; // Podria ser date?
      institucion: "Facultad de Agronomía Universidad de Buenos Aires";
      descripcionCurso: "Título de tesis: Persistencia de malezas gramíneas en cultivos de trigo del sudeste bonaerense. Director: Julio Scursoni";  // Aca irian los directores del curso o de mi posgrado (opc)
      duracion: ; // duracion en horas (opc)
      calificacion: 10;  // (opc)
    },
  ]

  constructor() { }

  getEducacion() {
    return this.educacion;
  }
}
