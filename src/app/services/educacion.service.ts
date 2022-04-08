import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../class/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url:string = 'http://localhost:3000/edus'; //en server.js
  httpOptions = {
    headers: {
      'content-type': 'application/json'
    }
  };
  educacion: Educacion[] = [];
    /* {
      id: 1,
      titulo: "Ingeniero Agrónomo",
      anioFin: 2009, // Podria ser date?
      lugar: "Facultad de Agronomía Universidad de Buenos Aires",  
      descripcion: "",  // Aca irian los directores del curso o de mi posgrado (opc)
      calificacion: 7.08,  // (opc)
    },
    {
      id: 2,   // (opc)
      titulo: "Doctor en Ciencias Agropecuarias",
      anioFin: 2017, 
      lugar: "Facultad de Agronomía Universidad de Buenos Aires",
      descripcion: "Título de tesis: Persistencia de malezas gramíneas en cultivos de trigo del sudeste bonaerense. Director: Julio Scursoni",
      calificacion: 10,  // (opc)
    },
    {
      id: 3,   // (opc)
      titulo: "Programa de Experto en Cerveza",
      anioFin: 2017, 
      lugar: "Centro de Cata de Cerveza",
      descripcion: "Directores: Ing.Quím Mag. Martín Boan; Ing. Mag. Diego Collini. Programa de 90 hs que abarcó todos los aspectos en la elaboración de cerveza, desde la materia prima, elaboración, envasado y calidad.",
      calificacion: 10,  // (opc)
    },
    {
      id: 4,   // (opc)
      titulo: "resistencia de malezas a herbicidas",
      anioFin: 2011, 
      lugar: "CERZOS (Conicet) - Universidad Nacional del Sur",
      descripcion: "Directores: Dr. Albert Fischer (U.California-Davis) y Bernal Valverde (U.Copenhagen). Duración: 30hs.",
      calificacion: 8, 
    }
  ] */

  constructor(private http:HttpClient) { }

  getEducacion():Observable<Educacion[]> {
    //return this.educacion;
    return this.http.get<Educacion[]>(this.url);
  }
}
