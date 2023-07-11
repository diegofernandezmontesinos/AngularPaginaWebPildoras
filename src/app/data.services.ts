import { HttpClient, HttpUrlEncodingCodec } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginServicesService } from "./login-services.service";


@Injectable()
export class DataServices {

  constructor(private httpClient: HttpClient, private loginService: LoginServicesService){}

  cargarEmpleados(){


      const token= this.loginService.getIdToken();



    return this.httpClient.get('https://empleados-97d24-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth' + token)
  }

  guardarEmpleado(empleados:Empleado[]){

    this.httpClient.put('https://empleados-97d24-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe({
      next: (v) => console.log('Se han guardado los empleados ' + v),
      error: (e) => console.log('Error' + e),
    });
  }

  actualizarEmpleados(indice:number, empleado: Empleado){
    let url= 'https://empleados-97d24-default-rtdb.europe-west1.firebasedatabase.app/datos.json' + indice + '.json';

    this.httpClient.put(url, empleado).subscribe({
      next: (v) => console.log('Se han actualizado los empleados ' + v),
      error: (e) => console.log('Error' + e),
    });

  }


  eliminarEmpleados(indice:number){
    let url= 'https://empleados-97d24-default-rtdb.europe-west1.firebasedatabase.app/datos.json' + indice + '.json';

    this.httpClient.delete(url).subscribe({
      next: (v) => console.log('Se han eliminado los empleados ' + v),
      error: (e) => console.log('Error' + e),
    });

  }
















}
