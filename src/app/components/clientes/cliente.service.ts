import {Injectable} from '@angular/core';
import {Cliente} from '../agregarcliente/cliente.model'; // Importa el modelo de cliente
import {Observable, of, throwError} from 'rxjs'; // Importa throwError en lugar de throw

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes: Cliente[] = [];
  //Metodo para obtener la lista de los clientes
  obtenerClientes(){
    return this.clientes
  }
  constructor() {
  }

    agregarCliente(nuevoCliente: {
        user: string;
        apellido: string;
        direccion: string;
        telefono: string;
        nombre: string
    }) {
    this.clientes.push(<Cliente>nuevoCliente)
  }


// Método para actualizar un cliente
  actualizarCliente(clienteActualizado
                      :
                      Cliente
  ):
    Observable<Cliente> {
    const index = this.clientes.findIndex(c => c.id === clienteActualizado.id);
    if (index !== -1
    ) {
      // Actualiza el cliente en la lista de clientes
      this.clientes[index] = {...this.clientes[index], ...clienteActualizado};
      return of(this.clientes[index]);
    } else {
      // Utiliza throwError para emitir un error observable
      return throwError('Cliente no encontrado');
    }
  }
}
