import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  public opcion: string = ""; // para el ngif
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
