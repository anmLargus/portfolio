import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/class/job';
import { JobServService } from 'src/app/services/job-serv.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {

  id: number = 1;
  fechaInicio: string = "1/1/1901";  // Existe tipo Date?
  fechaFin?: string = "1/1/1901";  // Existe tipo Date?
  empresa: string = "";
  posicion: string = "";
  descripcion: string = "";
  esActual: boolean = false;

  constructor( private jobServService: JobServService ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const job = new Job();
    job.id = this.id;
  }

}
