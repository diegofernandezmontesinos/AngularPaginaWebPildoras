import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { CaracteristicasEmpleadosComponent } from './caracteristicas-empleados/caracteristicas-empleados.component';
import { EmpleadosServiceService } from './empleados-service.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienessomosComponentComponent } from './quienessomos-component/quienessomos-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponenteComponent } from './actualiza-componente/actualiza-componente.component';
import { ErrorComponenteComponent } from './error-componente/error-componente.component';
import { DataServices } from './data.services';
import { LoginComponentComponent } from './login-component/login-component.component';
import { LoginServicesService } from './login-services.service';
import { CookieService } from 'ngx-cookie-service';
import { loginGuardian } from './login-component/login-guardian';


const appRoutes: Routes = [

    {path: '', component: HomeComponentComponent},
    {path: 'proyectos', component: ProyectosComponentComponent, canActivate:[loginGuardian]},
    {path: 'quienes', component: QuienessomosComponentComponent, canActivate:[loginGuardian]},
    {path: 'contacto', component: ContactoComponentComponent, canActivate:[loginGuardian]},
    {path: 'actualiza/:id', component: ActualizaComponenteComponent},
    {path: 'login', component: LoginComponentComponent},
    {path: '**', component: ErrorComponenteComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadosComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienessomosComponentComponent,
    ContactoComponentComponent,
    ActualizaComponenteComponent,
    ErrorComponenteComponent,
    LoginComponentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ServicioEmpleadosService,
    EmpleadosServiceService,
    DataServices,
    LoginServicesService,
    CookieService,
    loginGuardian
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
