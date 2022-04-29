import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/class/educacion';
import { EducacionService } from 'src/app/services/educacion.service';


@Component({
  selector: 'app-edu-flyer',
  templateUrl: './edu-flyer.component.html',
  styleUrls: ['./edu-flyer.component.scss']
})
export class EduFlyerComponent implements OnInit {

  edus: Educacion[] = [];

  constructor( private educacionService: EducacionService) { }

  ngOnInit(): void {
    //this.educaciones = this.educacionService.getEducacion();
    this.educacionService.getEducacion().subscribe(edus => {
      this.edus = edus;
      console.log("educacion desde servidor")
    });

  }

}
