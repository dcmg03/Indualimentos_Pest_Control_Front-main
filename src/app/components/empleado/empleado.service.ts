import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs'; // Importa throwError en lugar de throw
import {Empleado} from '../agr-empleado/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private empleados: Empleado[] = [];
  //Metodo para obtener la lista de los clientes
  obtenerEmpleados(){
    return this.empleados
  }
  constructor() {
  }

    agregarEmpleado(nuevoEmpleado: {
        user: string;
        apellido: string;
        direccion: string;
        telefono: string;
        nombre: string
    }) {
    this.empleados.push(<Empleado>nuevoEmpleado)
  }


// Método para actualizar un cliente
  actualizarEmpleado(empleadoActualizado
                      :
                      Empleado
  ):
    Observable<Empleado> {
    const index = this.empleados.findIndex(c => c.id === empleadoActualizado.id);
    if (index !== -1
    ) {
      // Actualiza el cliente en la lista de clientes
      this.empleados[index] = {...this.empleados[index], ...empleadoActualizado};
      return of(this.empleados[index]);
    } else {
      // Utiliza throwError para emitir un error observable
      return throwError('Empleado no encontrado');
    }
  }
}
