import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor( private errorService: ErrorService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError( error => {
        let errorMensaje = "";
        if ( error instanceof ErrorEvent ) {
          //Error del lado del frontend
          errorMensaje = `Client-side error: ${error.error.message}`;
        } else {
          //Error del lado del servidor
          errorMensaje = `Server-side error: ${error.status} ${error.message}`;
        }
        this.errorService.mostrarAlerta(errorMensaje);// muestra el mensaje de error
        return throwError( () => error );
      } )
    )
  }
}
