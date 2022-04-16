import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../class/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url:string = 'http://localhost:3000/edus'; //en server.js
  httpOptions = {
    headers: {
      'content-type': 'application/json'
    }
  };
  educacion: Educacion[] = [];
    

  constructor(private http:HttpClient) { }

  getEducacion():Observable<Educacion[]> {
    //return this.educacion;
    return this.http.get<Educacion[]>(this.url);
  }
}
