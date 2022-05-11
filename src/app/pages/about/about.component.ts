import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  opcion: string = "exp";

  constructor() { }

  ngOnInit(): void {
  }

  toggleExp(){
    this.opcion = "exp";
  }
  toggleEdu(){
    this.opcion = "edu";
  }

}
