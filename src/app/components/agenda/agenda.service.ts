import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  programacionDelDia: any[] = [
    { id: 1, hora: '09:00 AM', nombre: 'Servicio 1', cancelado: false },
    { id: 2, hora: '11:00 AM', nombre: 'Servicio 2', cancelado: false },
    // Agrega más servicios y datos aquí
  ];

  obtenerProgramacionDelDia() {
    // Simplemente devuelve la programación del día
    return this.programacionDelDia;
  }

  cancelarServicio(servicioId: number) {
    const servicio = this.programacionDelDia.find(s => s.id === servicioId);
    if (servicio) {
      servicio.cancelado = true;
      // Aquí puedes implementar más lógica, como notificar al usuario o enviar una solicitud al servidor.
    }
  }
}
