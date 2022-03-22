import { Injectable } from '@angular/core';
import { Educacion } from '../class/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educacion: Educacion[] = [
    {
      id: 1,
      titulo: "Ingeniero Agrónomo",
      anioFin: 2009, // Podria ser date?
      lugar: "Facultad de Agronomía Universidad de Buenos Aires";      
      descripcion: "",  // Aca irian los directores del curso o de mi posgrado (opc)
      calificacion: 7.08,  // (opc)
    },
    {
      id: 2,   // (opc)
      titulo: "Doctor en Ciencias Agropecuarias",
      anioFin: 2017, 
      lugar: "Facultad de Agronomía Universidad de Buenos Aires",
      descripcion: "Título de tesis: Persistencia de malezas gramíneas en cultivos de trigo del sudeste bonaerense. Director: Julio Scursoni",
      calificacion: 10;  // (opc)
    },
  ]

  constructor() { }

  getEducacion() {
    return this.educacion;
  }
}
