import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from 'src/app/class/job';

@Component({
  selector: 'app-form-job',
  templateUrl: './form-job.component.html',
  styleUrls: ['./form-job.component.scss']
})
export class FormJobComponent implements OnInit {

  @Input() job: Job = new Job();
  @Input() receivedJob: Job = new Job(); // 
  @Output() enviarJob = new EventEmitter<Job>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.job.id = this.receivedJob.id;
    this.job.fechaInicio = this.receivedJob.fechaInicio;
    this.job.fechaFin = this.receivedJob.fechaFin;
    this.job.empresa = this.receivedJob.empresa;
    this.job.posicion = this.receivedJob.posicion;
    this.job.descripcion = this.receivedJob.descripcion;
    this.job.esActual = this.receivedJob.esActual;

    this.enviarJob.emit(this.job)
  }

}
