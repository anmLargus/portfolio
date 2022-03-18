export class Job {
    id?: number = 1;
    fechaInicio: string = "1/1/1901";  // Existe tipo Date?
    fechaFin: string = "1/1/1901";  // Existe tipo Date?
    empresa: string = "";
    posicion: string = "";
    descripcion: string = "";
    esTrabajoActual: false;
    trabajosRealizados?: string = "";
}
