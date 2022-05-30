import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../class/skill';

const httpOptions = {
  headers: new HttpHeaders( { 'Content-Type':'application/json' } )
}

@Injectable({
  providedIn: 'root'
})

export class SkillService {

  urlSkill: string = /*'http://localhost:3000/skills'; */ 'http://localhost:8081/skills';

  constructor( private http:HttpClient ) { }

  getSkills():Observable<Skill[]> {

    return this.http.get<Skill[]>(this.urlSkill);
  }

  deleteSkill(skill: Skill): Observable<Skill> {
    const url = `${this.urlSkill}/${skill.id}`;
    return this.http.delete<Skill>(url);
  }

  addSkill(skill: Skill): Observable<Skill>  {
    return this.http.post<Skill>(this.urlSkill, skill, httpOptions);    
  }
}
