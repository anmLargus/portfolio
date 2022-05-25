import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/class/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup; // non-null assertion operator ( ! ). FormGroup va a manejar todo el formulario

  constructor( 
    private fb: FormBuilder ,
    private authService: AuthService , 
    private router: Router,
    //private modalService: NgbModal //Para el modal
    ) { }

  ngOnInit(): void {
    // Los valores x defecto son solo para que aparezca cargado
    this.form = this.fb.group({
      email:['', [Validators.email, Validators.required] ],
      password:['',
                [
                  Validators.required, 
                  Validators.minLength(6), 
                  Validators.maxLength(12), 
                  Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')    
                ]
            ],
    })
  }

  login(){
    console.log(this.form);
    
    const { email , password } = this.form.value

    console.log(email, password)

    this.authService.login(email, password)
      .subscribe({
        next: (data:any) => { 
          console.log (data);
          if(data) {
            this.router.navigate(['/editar']);// 
          } else {
            //Informar al usuario que no se pudo loguear
            console.log("No se pudo loguear");
          }        
        },
         error: e => { console.log(e) }  
      });
  }

  
  

}
