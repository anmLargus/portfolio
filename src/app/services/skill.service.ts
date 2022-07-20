import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Skill } from '../class/skill';

const httpOptions = {
  headers: new HttpHeaders( { 'Content-Type':'application/json' } )
}

const urlSkill = "https://morning-spire-26047.herokuapp.com/skills" /*'http://localhost:3000/skills';  'http://localhost:8081/api/skills' */;

@Injectable({
  providedIn: 'root'
})

export class SkillService {  

  constructor( private http:HttpClient ) { }

  getSkills():Observable<Skill[]> {

    return this.http.get<Skill[]>(urlSkill);
  }

  getOneSkill(id: number): Observable<Skill> {
    return this.http.get<Skill>(`${urlSkill}/${id}`);
  }

  deleteSkill(skill: Skill): Observable<Skill> {
    const url = `${urlSkill}/${skill.id}`;
    return this.http.delete<Skill>(url);
  }

  addSkill(skill: Skill): Observable<Skill>  {
    
    return this.http.post<Skill>(urlSkill, skill, httpOptions);    
  }

  update(skill: Skill): Observable<Skill> {
    const url = `${urlSkill}/${skill.id}`;
    return this.http.put<Skill>(url, skill, httpOptions);
  }
}
