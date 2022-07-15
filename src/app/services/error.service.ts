import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmService } from './confirm.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor( private confirmService: ConfirmService , private router: Router ) { }

  mostrarAlerta(mensaje: string) {
    if (mensaje.includes("No autorizado")) {
      this.alertaError("No Autorizado", mensaje, "/login" );
    } else {
      this.alertaError("Ooops! Algo ocurrió", mensaje, "/");
    } 
  }

  alertaError(title: string, message: string, route: string) {
    this.confirmService.confirm({
      title: `${title}`, 
      message: `Mensaje desde el servidor: ${message}`,
      estilo: 'danger' //alguno de los colores de bootstrap (primary, info, danger, etc)
    }).then((confirm) => {
      console.log(message);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([`${route}`]);
      });
    }, (cancel) => {
      console.log(message);
  });
  }





}
