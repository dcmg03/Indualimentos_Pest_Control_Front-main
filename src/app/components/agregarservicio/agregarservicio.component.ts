//agregarservicio.component.ts
import {Component} from '@angular/core';
import {ServicioService} from "../servicios/servicio.service";

@Component({
  selector: 'app-agregarservicio',
  templateUrl: './agregarservicio.component.html',
  styleUrls: ['./agregarservicio.component.css']
})
export class AgregarservicioComponent {
  nuevoServicio: any = {
    id: null,
    nombre: '',
    descripcion: '',
    tipoServicio: '',
    precioMetroCubico: null
  };

  constructor(private servicioService: ServicioService) {
  }

  agregarServicio() {
    this.servicioService.agregarServicio(this.nuevoServicio);
    this.nuevoServicio = {
      id: null,
      nombre: '',
      descripcion: '',
      tipoServicio: '',
      precioMetroCubico: null
    };

  }
}
