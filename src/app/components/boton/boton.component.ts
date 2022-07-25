import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})

// Boton reutilizable
export class BotonComponent implements OnInit {

  @Input() clase = "success"; // Inicializa con una clase de bootstrap
  @Input() label: string = "Enviar";
  @Output() clickear = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    
    this.clickear.emit();
  }

  

}
