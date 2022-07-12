import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

const LOGIN_ENDPOINT = "http://localhost:8081/login";

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //estaLogueado: boolean = false;

  constructor(private http: HttpClient) { }

  // Un pipe es algo que recibe lo que devuelve el método
  login(usuario: string, clave: string): Observable<boolean> {
    return this.http.post( LOGIN_ENDPOINT, { usuario, clave }) //en backend espera recibir con esas variables
    .pipe(map( ( res:any ) => {
      try {
        if(res?.jwtToken) {
          localStorage.setItem(TOKEN_KEY, res.jwtToken); //el jwt es enviado desde back como jwtToken
          //this.estaLogueado = true;
        } 
        return true;
      } catch (error) {
        return false;
      }
    } ) )
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  isLogged(): boolean {
    // Para corroborar que existe el token en el local storage
    return localStorage.getItem(TOKEN_KEY) !== null;
  }

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }
}
