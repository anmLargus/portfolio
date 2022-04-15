import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/class/job';
import { JobServService } from 'src/app/services/job-serv.service';

@Component({
  selector: 'app-jobs-flyer',
  templateUrl: './jobs-flyer.component.html',
  styleUrls: ['./jobs-flyer.component.scss']
})
export class JobsFlyerComponent implements OnInit {

  jobs: Job[] = [];



  constructor( private jobService: JobServService ) { }

  ngOnInit(): void {

    //this.jobs = this.jobService.getJobs();

    this.jobService.getJobs().subscribe(data => {
      this.jobs = data;
      console.log("jobs desde servidor")
    })
  }

  deleteJob(job:Job){
    this.jobs = this.jobs.filter( x => x.id !== job.id);
    this.jobService.deleteJob(job).subscribe();
  }

}
