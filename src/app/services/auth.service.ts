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
  login(email: string, password: string): Observable<boolean> {
    return this.http.post( LOGIN_ENDPOINT, { email, password })
    .pipe(map( ( res:any ) => {
      try {
        if(res?.token) {
          localStorage.setItem(TOKEN_KEY, res.token);
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
    // Debe chequearse que exista el token en el localStorage y tambien chequear claims
    return localStorage.getItem(TOKEN_KEY) !== null;
  }
}
