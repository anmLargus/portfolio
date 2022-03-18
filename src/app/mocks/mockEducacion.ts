import { Educacion } from "../class/educacion";

export const EDUCACIONES: Educacion[] [
    {
        id: 1;   // (opc)
        titulo: "Ingeniero Agrónomo";
        anio: 2009; // Podria ser date?
        institucion: "Facultad de Agronomía Universidad de Buenos Aires";
        descripcionCurso: "";  // Aca irian los directores del curso o de mi posgrado (opc)
        duracion: number; // duracion en horas (opc)
        calificacion: number;  // (opc)
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