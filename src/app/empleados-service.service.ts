import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataServices } from './data.services';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService: DataServices) { }

  obtenerEmpleados(){


    return this.dataService.cargarEmpleados;
  }

  setEmpleados(misEmpleados: Empleado[]){
    this.empleados = misEmpleados;
  }


  empleados:Empleado[] = [];
 /* empleados:Empleado[] = [

    new Empleado("Diego", "Fernandez","Dominus Et Deus", 7500),
    new Empleado("Angelica", "Solano","Presidente", 7200),
    new Empleado("Pandemonium", "Metalizado","Director", 3500),
    new Empleado("Pandemonium", "Madera","Administrativo", 2500),

  ];*/

  agregarEmpleadoServicio(empleado: Empleado){

    this.servicioVentanaEmergente.muestraMensaje("soy un servicio inyectado en otro" + " Persona que se va a agregar "+ empleado.nombre);
    this.empleados.push(empleado);

    this.dataService.guardarEmpleado(this.empleados);

  }

  encontrarEmpleado(indice:number){
    let empleado:Empleado = this.empleados[indice]
    return empleado;
  }

  actualizarEmpleado(indice:number, empleado: Empleado){
    let empleadoModificado = this.empleados[indice];
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;


    this.dataService.actualizarEmpleados(indice, empleado);
  }

  eliminarEmpleado(indice: number){
    this.empleados.splice(indice, 1);
    this.dataService.eliminarEmpleados(indice);

    if(this.empleados != null)this.dataService.guardarEmpleado(this.empleados);


  }




}
