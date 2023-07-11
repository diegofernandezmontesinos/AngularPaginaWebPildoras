import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosServiceService } from '../empleados-service.service';
import { Empleado } from '../empleado.model'

@Component({
  selector: 'app-actualiza-componente',
  templateUrl: './actualiza-componente.component.html',
  styleUrls: ['./actualiza-componente.component.css']
})
export class ActualizaComponenteComponent {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosService: EmpleadosServiceService, private route: ActivatedRoute){

  }

  empleados:Empleado[] = [];

  accion:number;

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];

    this.accion= this.route.snapshot.queryParams['accion'];

    let empleado: Empleado= this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }


  volverHome(){
    this.router.navigate(['']);
  }

  actualizaEmpleado(){

      if(this.accion == 1){
        let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
        this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
        this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
        this.router.navigate(['']);

      }else if(this.accion == 2){
        this.empleadosService.eliminarEmpleado(this.indice);
        this.router.navigate(['']);

      }


     };








  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
  indice: number;

}
