import {Component} from '@angular/core';
import {Cliente} from './cliente.model';
import {ClienteService} from "../clientes/cliente.service";

@Component({
  selector: 'app-agregarcliente',
  templateUrl: './agregarcliente.component.html',
  styleUrls: ['./agregarcliente.component.css']
})
export class AgregarclienteComponent {
  nuevoCliente: Cliente = {
    id: '',
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: ''
  };

  constructor(private clienteService: ClienteService) {
  }

  agregarCliente() {
    console.log(this.nuevoCliente);
    this.clienteService.agregarCliente(this.nuevoCliente);
    this.nuevoCliente = {
      id: '',
      nombre: '',
      apellido: '',
      direccion: '',
      telefono: ''
    };
  }
}
