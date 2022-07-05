import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/class/educacion';
import { ConfirmService } from 'src/app/services/confirm.service';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.scss']
})
export class AddEduComponent implements OnInit {

  constructor( private eduService: EducacionService ,
    private router: Router,
    private confirmService: ConfirmService    
  ) { }

  ngOnInit(): void {
  }

  agregarEdu(edu: Educacion) {
    this.eduService.addEdu(edu).subscribe();
  }

  confirmarAgregar(edu: Educacion) {
    this.confirmService.confirm({
      title: 'Confirmación', 
      message: '¿Agregar una nuevo titulo educativo a su lista?',
      estilo: 'success' //alguno de los colores de bootstrap (primary, info, danger, etc)
    }).then((confirm) => {
        this.agregarEdu(edu);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/editar'])
        });
    }, (cancel) => {
        console.log("Cancelado agregar nueva educación");
    });
  }

}
