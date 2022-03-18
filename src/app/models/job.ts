export interface Job {
    id?: number;
    fechaInicio: string;  // Existe tipo Date?
    fechaFin: string;  // Existe tipo Date?
    empresa: string;
    posicion: string;
    descripcion: string;
    esTrabajoActual: boolean;
    trabajosRealizados?: string;
    
}
