import {Component, OnInit} from '@angular/core';
import {AgendaService} from './agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  programacion: any[]=[];
  date:any; 

  constructor(private agendaService: AgendaService) {}

  ngOnInit() {
    // Recupera la programación del día desde el servicio de Agenda
    this.programacion = this.agendaService.obtenerProgramacionDelDia();
  }

  cancelarServicio(servicio: any) {
    // Implementa la lógica para cancelar el servicio aquí, por ejemplo, marcando el servicio como cancelado en el servicio de Agenda.
    this.agendaService.cancelarServicio(servicio.id);
  }
}
