import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from 'src/app/class/job';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  esBorrable: boolean = true;
  faCircleMinus = faCircleMinus;

  @Input() job: Job = new Job();
  @Output() deleteJob : EventEmitter<Job> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }  

}
