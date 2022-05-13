import { isNgTemplate } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from 'src/app/class/job';
import { JobServService } from 'src/app/services/job-serv.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {

  //@Output() onAddJob: EventEmitter<Job> = new EventEmitter();

  id: number = 0;
  fechaInicio: string = "1/1/1901";  // Existe tipo Date?
  fechaFin: string = "1/1/1901";  
  empresa: string = "";
  posicion: string = "";
  descripcion: string = "";
  esActual: boolean = false;

  constructor( private jobServService: JobServService ) { }

  ngOnInit(): void {
  }

 /*  onSubmit() {
    const {id, fechaInicio, fechaFin, empresa, posicion, descripcion, esActual } = this ;
    const newJob = {id, fechaInicio, fechaFin, empresa, posicion, descripcion, esActual } ;

    this.jobServService.addJob(newJob).subscribe( ); 
    //this.onAddJob.emit(newJob);
  }*/

    onSubmit() {
      const job = new Job();
      job.id = this.id;
      job.fechaInicio = this.fechaInicio;
      job.fechaFin = this.fechaFin;
      job.empresa = this.empresa;
      job.posicion = this.posicion;
      job.descripcion = this.descripcion;
      job.esActual = this.esActual;      
      
      this.jobServService.addJob(job).subscribe( );
    } 

  
}
