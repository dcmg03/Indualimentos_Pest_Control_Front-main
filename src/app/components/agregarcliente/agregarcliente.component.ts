import {Component} from '@angular/core';
import {Cliente} from './cliente.model';
import {ClienteService} from "../clientes/cliente.service";

@Component({
  selector: 'app-agregarcliente',
  templateUrl: './agregarcliente.component.html',
  styleUrls: ['./agregarcliente.component.css']
})
export class AgregarclienteComponent {
  nuevoCliente: {user: string; apellido: string; direccion: string; telefono: string;  nombre: string } = {
    user: '',
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: ''
  };
  items: any;

  constructor(private clienteService: ClienteService) {
    this.items=[
      {label:'Inicio', icon:'pi pi-inicio', routerLink:'/inicio'}
    ];
  }

  agregarCliente() {
    console.log(this.nuevoCliente);
    this.clienteService.agregarCliente(this.nuevoCliente);
    this.nuevoCliente = {
      user: '',
      nombre: '',
      apellido: '',
      direccion: '',
      telefono: ''
    };
  }

  showMultiple() {

  }
}
