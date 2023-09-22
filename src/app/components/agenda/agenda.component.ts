import {Component, OnInit} from '@angular/core';
import {AgendaService} from './agenda.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  programacion: any[]=[];
  date:any;

  public servicios = [];
  public servicioSeleccionado: any;

  public tipoServicios = [];
  public tipoServicioSeleccionado: any;

  public availableHours: any[] = [];
  public selectedHours: any;

  constructor(private agendaService: AgendaService, private apiService: ApiService) {}

  ngOnInit() {
    this.generateAvailableHours();
    this.apiService.getAll("service").subscribe(res => {
      this.servicios = res as []
    });
  }

  private generateAvailableHours() {
    let hour = 8;
    let option = 0; // Comenzamos a las 8 AM

    while (hour <= 18) { // Terminamos a las 6 PM
      for (let minutes = 0; minutes < 60; minutes += 30) {
        const formattedHour = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        this.availableHours.push({id: option, name: formattedHour});
      }
      option ++
      hour++;
    }
  }

  changeOptions(value: any){
    this.apiService.getAllByFilters("kindOfService", {
      service: {
        id: value
      }
    }).subscribe(res => {
      this.tipoServicios = res as [];
    })

  }

  cancelarServicio(servicio: any) {
    this.agendaService.cancelarServicio(servicio.id);
  }
}
