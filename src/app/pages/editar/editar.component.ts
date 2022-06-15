import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/class/job';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmService } from 'src/app/services/confirm.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  public opcion: string = ""; // para el ngif  

  constructor(
    private auth: AuthService, 
    private router: Router, 
    private confirmService: ConfirmService 
  ) { }

  ngOnInit(): void {
  }

  // Avisa que se va a desloguear
  confirmLogout() {
    this.confirmService.confirm({
      title: 'Finalizar Edición - Logout', 
      message: 'Al finalizar la edición también finaliza su sesión de usuario.',
      estilo: 'warning'
    }).then((confirm) => {
        this.logout();
    }, (cancel) => {
        console.log("No confirma Logout");
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']); // Cuando se desloguea, va al inicio
  }

 

}
