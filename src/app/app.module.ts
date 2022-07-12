import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagCloudModule } from 'angular-tag-cloud-module';
//import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { FooterComponent } from './components/footer/footer.component';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { BotonComponent } from './components/boton/boton.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { ProjCardComponent } from './components/proj-card/proj-card.component';
import { EduCardComponent } from './components/edu-card/edu-card.component';
import { ContactoFormComponent } from './components/contacto-form/contacto-form.component';


import { JobCardComponent } from './components/job-card/job-card.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { ErrorComponent } from './pages/error/error.component';

import { AboutComponent } from './pages/about/about.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { EduFlyerComponent } from './pages/edu-flyer/edu-flyer.component';
import { JobsFlyerComponent } from './pages/jobs-flyer/jobs-flyer.component';
import { LoginComponent } from './pages/login/login.component';
import { EditarComponent } from './pages/editar/editar.component';
import { SkillFlyerComponent } from './pages/skill-flyer/skill-flyer.component';
import { AboutCardComponent } from './components/about-card/about-card.component';

import { registerLocaleData } from '@angular/common';

import myLocaleEs from '@angular/common/locales/es';
import { BaseCardComponent } from './components/base-card/base-card.component';
import { EditarLandingComponent } from './pages/editar-landing/editar-landing.component';
import { EditPersonaComponent } from './pages/edit-persona/edit-persona.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ConfirmDirective } from './directives/confirm.directive';
import { ModalConfirmDialogComponent } from './components/modal-confirm-dialog/modal-confirm-dialog.component';
import { ConfirmService } from './services/confirm.service';
import { ConfirmState } from './class/confirm-state';
import { FormJobComponent } from './components/form-job/form-job.component';
import { EditJobComponent } from './pages/edit-job/edit-job.component';
import { AddJobComponent } from './pages/add-job/add-job.component';
import { FormEduComponent } from './components/form-edu/form-edu.component';
import { EditEduComponent } from './pages/edit-edu/edit-edu.component';
import { AddEduComponent } from './pages/add-edu/add-edu.component';
import { FormProjectComponent } from './components/form-project/form-project.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { AddProjectComponent } from './pages/add-project/add-project.component';
import { FormSkillComponent } from './components/form-skill/form-skill.component';
import { EditSkillComponent } from './pages/edit-skill/edit-skill.component';
import { AddSkillComponent } from './pages/add-skill/add-skill.component';
import { AuthInterceptor } from './services/auth.interceptor';

registerLocaleData(myLocaleEs);

@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    TopnavbarComponent,
    InicioComponent,
    
    ErrorComponent,
    BotonComponent,
    SkillCardComponent,


    AboutComponent,
    ProyectosComponent,
    ProjCardComponent,
    EduCardComponent,
      
    EduFlyerComponent,
    JobsFlyerComponent,
    ContactoFormComponent,
    LoginComponent,


    EditarComponent,
    JobCardComponent,
    SkillFlyerComponent,
    AboutCardComponent,


  

    BaseCardComponent,
    EditarLandingComponent,
    EditPersonaComponent,
    SpinnerComponent,
    ConfirmDirective,
    ModalConfirmDialogComponent,
    FormJobComponent,
    EditJobComponent,
    AddJobComponent,
    FormEduComponent,
    EditEduComponent,
    AddEduComponent,
    FormProjectComponent,
    EditProjectComponent,
    AddProjectComponent,
    FormSkillComponent,
    EditSkillComponent,
    AddSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    TagCloudModule,
    
  ],
  entryComponents: [
    ModalConfirmDialogComponent
  ],
  providers: [
    ConfirmService, 
    ConfirmState,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
