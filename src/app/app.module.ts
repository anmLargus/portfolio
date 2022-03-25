import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';

import { ErrorComponent } from './pages/error/error.component';
import { BotonComponent } from './components/boton/boton.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { SkillsListComponent } from './pages/skills-list/skills-list.component';

import { AboutComponent } from './pages/about/about.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProjCardComponent } from './components/proj-card/proj-card.component';
import { EduCardComponent } from './components/edu-card/edu-card.component';
import { ExpCardComponent } from './components/exp-card/exp-card.component';

import { EduFlyerComponent } from './components/edu-flyer/edu-flyer.component';
import { JobsFlyerComponent } from './components/jobs-flyer/jobs-flyer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopnavbarComponent,
    InicioComponent,
    
    ErrorComponent,
    BotonComponent,
    SkillCardComponent,
    SkillsListComponent,

    AboutComponent,
    ProyectosComponent,
    ProjCardComponent,
    EduCardComponent,
    ExpCardComponent,
       
    EduFlyerComponent,
    JobsFlyerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
