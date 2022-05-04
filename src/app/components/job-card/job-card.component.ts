import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from 'src/app/class/job';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {


  esBorrable: boolean = false;
  faCircleMinus = faCircleMinus;

  @Input() job: Job = new Job();
  @Output() deleteJob : EventEmitter<Job> = new EventEmitter();

  constructor( private router: Router, private auth: AuthService ) { }

  ngOnInit(): void {
    this.esBorrable = this.auth.isLogged();
  }
  
  onDelete(job: Job) {
    console.log("DELETE A JOB !!");
    console.log(job);
    this.deleteJob.emit(job);
  }



}
