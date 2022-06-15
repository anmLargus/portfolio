import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { ErrorComponent } from './pages/error/error.component';
import { AboutComponent } from './pages/about/about.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
//import { ContactoFormComponent } from './components/contacto-form/contacto-form.component'; //To Do más adelante
import { LoginComponent } from './pages/login/login.component';
import { EditarComponent } from './pages/editar/editar.component';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { IsNotLoggedGuard } from './guards/is-not-logged.guard';
import { EditarLandingComponent } from './pages/editar-landing/editar-landing.component';
import { EditJobComponent } from './pages/edit-job/edit-job.component';


const routes: Routes = [
  {path: "", redirectTo: "inicio", pathMatch: "full"},
  {path: "inicio", component: InicioComponent},
  {path: "proyectos", component: ProyectosComponent},
  {path: "about", component: AboutComponent},
  //{path: "contacto", component: ContactoFormComponent}, //To Do más adelante
  {path: "login", component: LoginComponent, canActivate: [IsNotLoggedGuard]},
  {path: "editar-landing", component: EditarLandingComponent, canActivate: [IsNotLoggedGuard]  },
  {path: "editar", component: EditarComponent, canActivate: [IsLoggedGuard]},//
  {path: ":id/editJob", component: EditJobComponent, canActivate: [IsLoggedGuard] },
  {path: "**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
