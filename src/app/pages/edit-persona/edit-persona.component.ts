import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { JobServService } from 'src/app/services/job-serv.service';


@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.scss']
})
export class EditPersonaComponent implements OnInit {

  userForm!: FormGroup;

  constructor( private fb: FormBuilder, private jobService: JobServService ) {   }

  ngOnInit(): void { 
    this.userForm = this.fb.group({
      "nombre": [ "", Validators.required ],
      "apellido": [ "" , Validators.required ],
      "email": [ "",
                [ 
                  Validators.required,
                  Validators.email
                 ]               
              ],
      "parrafoPresentacion": [ "" ,
                              [
                                Validators.required,
                               Validators.minLength(140), 
                               Validators.maxLength(1000),
                               ]
                            ],
      "frasePresentacion": [ "" ,
                             [
                               Validators.required,
                              Validators.minLength(10),
                              Validators.maxLength(280),                            
                            ]                            
                          ],
      "linkFoto": [ "" , Validators.required ],
      "linkedin": [ "" , Validators.required ],
      "github": [ "" , Validators.required ],
      "redSocial": [ "" , Validators.required ],
    });
   }
  
  enviar(){
    console.log(this.userForm);

  }

}
