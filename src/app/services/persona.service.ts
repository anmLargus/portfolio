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

  urlPersona: string = /* "http://localhost:3000/persona"; */  'http://localhost:8081/personas' ;

  constructor( private http: HttpClient) { }

  getPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.urlPersona);
  }

  getPersona1(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.urlPersona}/${id}`);
  }

  updatePersona(persona: Persona): Observable<Persona> {
   
    return this.http.put<Persona>(`${this.urlPersona}/1`, persona, httpOptions); 
        
  }
  /*
  addPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.urlPersona, persona , httpOptions);
  }
  */
}
