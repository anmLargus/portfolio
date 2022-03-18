import { Job } from "../models/job";

export const jobs: Job[] [
    {
        id: 1;
        fechaInicio: 1998;  // Existe tipo Date?
        fechaFin: 2007;  // Existe tipo Date?
        empresa: "Estudio contable Artese";
        posicion: "Administrativo";
        descripcion: "Asistente administrativo, atención a clientes, gestiones en organismos públicos, cobranzas";
        esTrabajoActual: false;
        trabajosRealizados: "";  // (opc) Aquí debería colocar la producción académica
    },
    {
        id: 2;
        fechaInicio: 2009;  // Existe tipo Date?
        fechaFin: 2013;  // Existe tipo Date?
        empresa: "Facultad de Agronomía Universidad de Buenos Aires";
        posicion: "Ayudante de primera";
        descripcion: "Cátedra de Producción Vegetal. Participé del dictado de las materias Producción Vegetal, Malezas, Adversidades Fitosanitarias y Manejo de Adversidades Fitosanitarias";
        esTrabajoActual: false;
        trabajosRealizados: "";  // (opc) Aquí debería colocar la producción académica
    },
]



