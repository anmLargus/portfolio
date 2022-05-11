import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../class/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url:string = 'http://localhost:3000/skills';
  httpOptions = {
    headers: {
      'content-type': 'application-json'
    }
  };

  skills: Skill[] = [];    

  constructor( private http:HttpClient ) { }

  getSkills():Observable<Skill[]> {
    //return this.skills;
    return this.http.get<Skill[]>(this.url);
  }
}
