import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorService } from './error.service';

// clase para manejar los mensajes de error

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor( private errorService: ErrorService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError( error => {
        let errorMensaje = "";
        if (error instanceof ErrorEvent) {
          //client-side error
          errorMensaje = `Client-side error: ${error.error.message}`;
        } else if (error instanceof HttpErrorResponse && error.status === 401 ) {
          // Unauthorized
          errorMensaje = `No autorizado: ${error.status} ${error.message}`
        } else {
          //backend error
          errorMensaje = `Server-side error: ${error.status} ${error.message}`;
        }  
        /*
        if ( error instanceof ErrorEvent ) {
          //Error del lado del frontend
          errorMensaje = `Client-side error: ${error.error.message}`;
        } else {
          //Error del lado del servidor
          errorMensaje = `Server-side error: ${error.status} ${error.message}`;
        }
        */
        this.errorService.mostrarAlerta(errorMensaje);// muestra el mensaje de error
        return throwError( () => error );
      } )
    )
  }
}
