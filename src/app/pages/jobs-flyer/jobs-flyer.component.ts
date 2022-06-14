import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/class/job';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmService } from 'src/app/services/confirm.service';
import { JobServService } from 'src/app/services/job-serv.service';

@Component({
  selector: 'app-jobs-flyer',
  templateUrl: './jobs-flyer.component.html',
  styleUrls: ['./jobs-flyer.component.scss']
})
export class JobsFlyerComponent implements OnInit {

  jobs: Job[] = [];
  loading = true;
  isLogged: boolean = false;

  constructor(
    private jobService: JobServService ,
    private auth: AuthService,
    private confirmService: ConfirmService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(data => {
      this.loading = false;
      this.jobs = data.sort( (a , b) => 0 - (a.fechaFin > b.fechaFin ? 1 : -1 )); // TODO: resolver como ordenar el trabajo actual
     } );    

    this.isLogged = this.auth.isLogged(); // true

  }

  confirmarDeleteJob(job: Job) {
    this.confirmService.confirm({
      title: 'Confirme eliminar ítem de Experiencia Laboral', 
      message: '¿Está seguro de querer eliminarlo? Esta acción no puede volver atrás',
      estilo: 'danger'
    }).then((confirm) => {
        this.deleteJob(job);
    }, (cancel) => {
        console.log("Cancelado borrar ítem");
    });
  }

  deleteJob(job: Job) {
    this.jobService.deleteJob(job)
      .subscribe( ( ) => ( this.jobs = this.jobs.filter( ( j ) => j.id !== job.id ) ) );
  }

  editJob(job: Job) {
    console.log("editar Job")
    console.log(job);
    this.router.navigateByUrl(`/editar/${job.id}/editJob`);
  }

  

}
