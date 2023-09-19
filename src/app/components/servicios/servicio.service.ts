
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private servicios: any[] = [];

  constructor() {
    // Puedes inicializar el arreglo de servicios aquí si es necesario
    // Ejemplo: this.servicios = [...];
  }

  // Método para obtener la lista de servicios
  obtenerServicios(): any[] {
    return this.servicios;
  }

  // Método para agregar un nuevo servicio
  agregarServicio(nuevoServicio: any): void {
    this.servicios.push(nuevoServicio);
  }

  // Otros métodos para actualizar, eliminar o realizar operaciones con servicios según tus necesidades
}
