import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/class/job';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor( private jobService: JobServService , private auth: AuthService ) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(data => {
      this.loading = false;
      this.jobs = data;
     } );    

    this.isLogged = this.auth.isLogged(); // true

  }

  deleteJob(job: Job) {
    this.jobService.deleteJob(job)
      .subscribe( ( ) => ( this.jobs = this.jobs.filter( ( j ) => j.id !== job.id ) ) );
  }

  editJob(job: Job) {
    alert("VAS A EDITAR JOB!")
  }

  

}
