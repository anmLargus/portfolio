import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  mostrarAlerta(mensaje: string) {
    alert("Ocurrió un error. Intenta recargar la página en unos minutos (ver consola para más detalle)");
    console.log(mensaje);
  }
}
