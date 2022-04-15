import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from 'src/app/class/job';

import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exp-card',
  templateUrl: './exp-card.component.html',
  styleUrls: ['./exp-card.component.scss']
})
export class ExpCardComponent implements OnInit {

  esBorrable: boolean = true;
  faCircleMinus = faCircleMinus;

  @Input() job: Job = new Job();
  @Output() deleteJob : EventEmitter<Job> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(job: Job) {
    console.log("onDelete" + job);
    this.deleteJob.emit(job);
    
  }

}
