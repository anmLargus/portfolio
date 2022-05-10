import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../class/persona';

const httpOptions = {
  headers: new HttpHeaders( { 'Content-Type':'application/json' } )
}

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  urlPersona: string = "http://localhost:3000/persona";

  constructor( private http: HttpClient) { }

  getPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.urlPersona);
  }
}
