import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from "src/app/class/job";
import { BaseCardComponent } from "../base-card/base-card.component";

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})

export class JobCardComponent extends BaseCardComponent implements OnInit {

  @Input() job: Job = new Job();
  @Output() deleteJob : EventEmitter<Job> = new EventEmitter();

  constructor() {
    super();
  }

  override ngOnInit(): void {  }

  onDelete(job: Job) {
    this.deleteJob.emit(job);
  }

  onEdit() {
    console.log("Presionó Editar!!")
    alert("PRESIONÓ EDITAR")
  }

}





/*
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from 'src/app/class/job';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  
  faCircleMinus = faCircleMinus;

  @Input() job: Job = new Job();
  @Input() esBorrable: boolean = false;
  @Output() deleteJob : EventEmitter<Job> = new EventEmitter();

  constructor(  ) { }

  ngOnInit(): void {
    
  }
  
  onDelete(job: Job) {
    console.log("DELETE A JOB !!");
    console.log(job);
    this.deleteJob.emit(job);
  }



}
*/
