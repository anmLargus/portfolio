import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/class/job';
import { ConfirmService } from 'src/app/services/confirm.service';
import { JobServService } from 'src/app/services/job-serv.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {


  constructor( 
    private jobService: JobServService,
    private confirmService: ConfirmService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  agregar(job: Job) {
    
    this.jobService.addJob(job).subscribe();
  }

  confirmarAgregar(job: Job) {
    this.confirmService.confirm({
      title: 'Confirmación', 
      message: '¿Agregar una nueva experiencia laboral a su lista?',
      estilo: 'success' //alguno de los colores de bootstrap (primary, info, danger, etc)
    }).then((confirm) => {
        this.agregar(job);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/editar'])
        });
    }, (cancel) => {
        console.log("Cancelado agregar nuevo trabajo");
    });
  }

}
