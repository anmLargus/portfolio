import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/class/project';
import { ConfirmService } from 'src/app/services/confirm.service';
import { ProjServService } from 'src/app/services/proj-serv.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  constructor( 
    private projService: ProjServService, 
    private confirmService: ConfirmService ,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  agregar(proj: Project) {
    this.projService.addProject(proj).subscribe();
  }

  confirmarAgregar(proj: Project) {
    this.confirmService.confirm({
      title: 'Confirmación', 
      message: '¿Agregar una nuevo proyecto a su lista?',
      estilo: 'success' 
    }).then((confirm) => {
        this.agregar(proj);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/editar'])
        });
    }, (cancel) => {
        console.log("Cancelado agregar nuevo proyecto");
    });
  }

}
