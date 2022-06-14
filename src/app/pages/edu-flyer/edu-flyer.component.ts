import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/class/educacion';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmService } from 'src/app/services/confirm.service';
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

  constructor( 
    private educacionService: EducacionService , 
    private auth: AuthService,
    private confirmService: ConfirmService
  ) { }

  ngOnInit(): void {
    
    this.educacionService.getEducacion().subscribe(edus => {
      this.loading = false;
      this.edus = edus.sort( (a , b) => b.anioFin - a.anioFin );      
    });  

    this.isLogged = this.auth.isLogged();
  }

  confirmDeleteEducacion(edu: Educacion) {
    this.confirmService.confirm({
      title: 'Confirme eliminar ítem de su Educación', 
      message: '¿Está seguro de querer eliminarlo? Esta acción no puede volver atrás',
      estilo: 'danger' //alguno de los colores de bootstrap (primary, info, danger, etc)
    }).then((confirm) => {
        this.deleteEducacion(edu);
    }, (cancel) => {
        console.log("Cancelado borrar ítem");
    });
  }

  deleteEducacion(edu: Educacion) {
    this.educacionService.deleteEdu(edu)
    .subscribe( ( ) => ( this.edus = this.edus.filter( (t) => t.id !== edu.id) ) );
  }

}
