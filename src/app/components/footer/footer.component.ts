import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public user = {nombre: "Andrés", apellido: "Martin"}; //TODO RECIBIR ESTO DESDE LA DB

  constructor( ) { }

  ngOnInit(): void {
  }

 

}
