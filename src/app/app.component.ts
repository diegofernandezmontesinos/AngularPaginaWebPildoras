import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosServiceService } from './empleados-service.service';
import  firebase  from 'firebase/compat/app';
import { LoginServicesService } from './login-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


constructor(private loginService: LoginServicesService){



}

ngOnInit(): void {

  firebase.initializeApp({
    apiKey: "AIzaSyAb6ZXy_I0h4p3Vv1jtBCn9SbkM9JgPaPc",
    authDomain: "empleados-97d24.firebaseapp.com",
  })

}


estaLogueado(){
  return this.loginService.estaLogueado();
}

logout(){
  return this.loginService.logout();
}





}
