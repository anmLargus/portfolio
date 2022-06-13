import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/class/persona';
import { ConfirmService } from 'src/app/services/confirm.service';
import { ModalConfirmDialogComponent } from 'src/app/components/modal-confirm-dialog/modal-confirm-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  persona: Persona = new Persona;
  loading = true;

  images = [
    "assets/escritorio3.png",
    "assets/RStudio.png",
    "assets/pantallaVisualStudio.png"
  ]

  iconoLinkedin = "/assets/linkedin.svg";
  iconoGithub = "assets/github.svg";

  constructor( private personaService: PersonaService , private confirmService: ConfirmService , private modal: NgbModal) { }

  ngOnInit(): void {
    this.personaService.getPersona1(27)
      .subscribe(data => { 
        this.loading = false ; 
        (this.persona = data) 
      } );
  }

  /* PROBAR MODAL
  openConfirm() {
    this.confirmService.confirm({
      title: 'Testing', 
      message: 'Testing a confirmation dialog...',
      estilo: 'success'
    }).then((confirm) => {
        console.log("CONFIRMADO!!!");
    }, (cancel) => {
        console.log("Cancelado borrar ítem");
    });
  } */

}
