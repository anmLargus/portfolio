import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/class/job';
import { JobServService } from 'src/app/services/job-serv.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {

  id: number = 0;
  job: Job = new Job();

  constructor(
    private jobService: JobServService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.jobService.getOneJob(this.id).subscribe( (result: Job) => { this.job = result} )
  }

  edit(jobEditado: Job) {
    this.jobService.update(jobEditado).subscribe();
    this.volverAtras();
  }

  volverAtras() {
    this.router.navigate( ['/editar'] )
  }

}
