export class Job {
    id?: number = 1;
    anioInicio: string = "1/1/1901";  // Existe tipo Date?
    anioFin: string = "1/1/1901";  // Existe tipo Date?
    empresa: string = "";
    posicion: string = "";
    descripcion: string = "";
    esActual: boolean = false;
    trabajosRealizados?: string = "";
}
