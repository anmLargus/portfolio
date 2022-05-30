import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/class/educacion';
import { AuthService } from 'src/app/services/auth.service';
import { EducacionService } from 'src/app/services/educacion.service';


@Component({
  selector: 'app-edu-flyer',
  templateUrl: './edu-flyer.component.html',
  styleUrls: ['./edu-flyer.component.scss']
})
export class EduFlyerComponent implements OnInit {

  edus: Educacion[] = [];
  isLogged = false;
  loading = true;

  constructor( private educacionService: EducacionService , private auth: AuthService) { }

  ngOnInit(): void {
    
    this.educacionService.getEducacion().subscribe(edus => {
      this.loading = false;
      this.edus = edus.sort( (a , b) => b.anioFin - a.anioFin );      
    });  

    this.isLogged = this.auth.isLogged();
  }

  deleteEducacion(edu: Educacion) {
    this.educacionService.deleteEdu(edu)
    .subscribe( ( ) => ( this.edus = this.edus.filter( (t) => t.id !== edu.id) ) );
  }

}
