import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Persona } from 'src/app/class/persona';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.scss']
})
export class EditPersonaComponent implements OnInit {
  //FORMULARIO REACTIVO
  userForm!: FormGroup;

  persona: Persona = new Persona();

  constructor( private fb: FormBuilder, private personaService: PersonaService ) {   }

  ngOnInit(): void { 
    this.userForm = this.fb.group({
      "nombre": [ "", 
                  [
                    Validators.required,
                    Validators.maxLength(50)
                  ] 
                ],
      "apellido": [ "" , Validators.required, Validators.maxLength(50) ],
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
      "redSocial": [ ""  ],
    });

   }
  
  enviar(){
    console.log(this.userForm);

    const { 
      nombre, apellido, email, parrafoPresentacion, 
      frasePresentacion, linkFoto, linkedin, github, redSocial 
    } = this.userForm.value ;

    this.personaService.updatePersona({
      nombre, apellido, email, parrafoPresentacion, 
      frasePresentacion, linkFoto, linkedin, github, redSocial}).subscribe(
         response => { console.log(response) } 
         );
  }

  

  




}
