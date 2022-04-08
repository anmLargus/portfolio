import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../class/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url:string = 'http://localhost:3003/skills';
  httpOptions = {
    headers: {
      'content-type': 'application-json'
    }
  };

  skills: Skill[] = [];
    /* {
      id:  1,
      habilidad: "HTML CSS",
      progress: 100,
    },
    {
      id:  2,
      habilidad: "javascript",
      progress: 80,
    },
    {
      id:  3,
      habilidad: "angular",
      progress: 50,
    },
    {
      id:  4,
      habilidad: "MySQL",
      progress: 10,
    },
    {
      id:  5,
      habilidad: "R",
      progress: 90,
    },
  ] */

  constructor(private http:HttpClient) { }

  getSkills():Observable<Skill[]> {
    //return this.skills;
    return this.http.get<Skill[]>(this.url);
  }
}
