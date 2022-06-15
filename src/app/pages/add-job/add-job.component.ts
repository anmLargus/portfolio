import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/class/job';
import { JobServService } from 'src/app/services/job-serv.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {


  constructor( private jobService: JobServService ) { }

  ngOnInit(): void {
  }

  agregar(job: Job) {
    console.log(job)
    this.jobService.addJob(job).subscribe();
  }

}
