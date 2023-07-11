import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosServiceService } from '../empleados-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

  title = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService: EmpleadosServiceService){


  }
  ngOnInit(): void {
    //this.empleados = this.empleadosService.empleados;



   /* this.empleadosService.obtenerEmpleados().subscribe((misEmpleados: Empleado[]) =>  {

      this.empleados = Object.values(misEmpleados);

      this.empleadosService.setEmpleados(this.empleados)
    });*/
  }

  empleados:Empleado[] = [];
/*
    new Empleado("Diego", "Fernandez","Dominus Et Deus", 7500),
    new Empleado("Angelica", "Solano","Presidente", 7200),
    new Empleado("Pandemonium", "Metalizado","Director", 3500),
    new Empleado("Pandemonium", "Madera","Administrativo", 2500),

  ];*/


  agregarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    //this.empleados.push(miEmpleado);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  };

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;




}
