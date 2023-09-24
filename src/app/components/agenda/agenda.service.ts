import { Injectable } from '@angular/core';
import {Agenda} from '../agenda/agenda.model';
import {Observable, of, throwError} from 'rxjs'; // Importa throwError en lugar de throw


@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  programacionDelDia: any[] = [
    { id: 1, hora: '09:00 AM', nombre: 'Servicio 1', cancelado: false },
    { id: 2, hora: '11:00 AM', nombre: 'Servicio 2', cancelado: false },
    // Agrega más servicios y datos aquí
  ];

  private agenda: Agenda[] = []

  obtenerAgenda() : any[]{
    return this.agenda
  }

  agregarAgenda(nuevaAgenda: Agenda) {
    this.agenda.push(nuevaAgenda);
  }

  actualizarAgenda(AgendaActualzada:Agenda):
  Observable<Agenda> {
    const index = this.agenda.findIndex(c => c.id === AgendaActualzada.id);
    if (index !== -1
    ) {
      // Actualiza el cliente en la lista de clientes
      this.agenda[index] = {...this.agenda[index], ...AgendaActualzada};
      return of(this.agenda[index]);
    } else {
      // Utiliza throwError para emitir un error observable
      return throwError('Agenda no encontrado');
    }
  }

  cancelarServicio(servicioId: number) {
    const servicio = this.programacionDelDia.find(s => s.id === servicioId);
    if (servicio) {
      servicio.cancelado = true;
      // Aquí puedes implementar más lógica, como notificar al usuario o enviar una solicitud al servidor.
    }
  }
}
