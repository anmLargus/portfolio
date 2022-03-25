import { Injectable } from '@angular/core';
import { Job } from '../class/job';

@Injectable({
  providedIn: 'root'
})
export class JobServService {

  jobs: Job[] = [
    {
      id: 1,
      fechaInicio: "enero de 2016", 
      fechaFin: "",  
      empresa: "@YurcaBeer",
      posicion: "emprendimiento propio",
      descripcion: "Elaboración y venta de cerveza artesanal. Me encargo junto a mi socio de todos los procesos involucrados, desde la compra de insumos, la elaboración y enbarrilado hasta la entrega al cliente. Diseñé junto a mi socio la microfábrica con sus procesos y operaciones.",
      esActual: true,
    },    
    {
      id: 2,
      fechaInicio: "septiembre de 2013", 
      fechaFin: "octubre de 2015",  
      empresa: "facultad de agronomia universidad de buenos aires",
      posicion: "ayudante de primera regular",
      descripcion: "cátedra de Producción Vegetal, UBA resol C.D.4469. Docente en las materias Producción Vegetal, Malezas, Adversidades Fitosanitarias y Manejo de Adversidades Fitosanitarias (4to. año carrera Agronomía). Conduje experimentos a campo y también coordiné y asistí a los alumnos de grado en sus proyectos de tesina",
      esActual: false,
    },
    {
      id: 3,
      fechaInicio: "septiembre de 1998", 
      fechaFin: "agosto de 2007",  
      empresa: "estudio contable dr. artese",
      posicion: "administrativo",
      descripcion: "administrativo, asistente, atención a clientes, gestiones en organismos públicos, cobranzas.",
      esActual: false,
    },
    {
      id: 4,
      fechaInicio: "abril de 2009",
      fechaFin: "marzo de 2014",
      empresa: "CONICET",
      posicion: "becario de posgrado, becas tipo I y tipo II",
      descripcion: "Director: Julio Scursoni, Co-Director: Roberto Benech-Arnold.",
      esActual: false,
    }
  ]

  constructor() { }

  getJobs() {
    return this.jobs ;
  }
}
