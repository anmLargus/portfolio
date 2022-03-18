export interface Educacion {
    id?: number;
    titulo: string;
    anio: number; // Podria ser date?
    institucion: string;
    descripcionCurso?: string;  // Aca irian los directores del curso o de mi posgrado
    duracion?: number; // duracion en horas
    calificacion?: number; 

}
