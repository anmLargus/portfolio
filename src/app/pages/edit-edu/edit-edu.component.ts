import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/class/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.scss']
})
export class EditEduComponent implements OnInit { 

  id: number = 0;
  edu: Educacion = new Educacion();

  constructor(
    private eduService: EducacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.eduService.getOneEdu(this.id).subscribe( (result: Educacion) => { this.edu = result} )
  }

  edit(educacionEditada: Educacion) {
    this.eduService.updateEdu(educacionEditada).subscribe();
    this.volverAtras();
  }

  volverAtras() {
    this.router.navigate( ['/editar'] )
  }

}
