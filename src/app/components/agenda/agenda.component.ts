import {Component, OnInit} from '@angular/core';
import {AgendaService} from './agenda.service';
import { ApiService } from 'src/app/services/api.service';
import { Agenda } from './agenda.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastComponent } from '../toast/toast.component';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  agenda:Agenda[] = [];
  programacion: any[]=[];
  date:any;
  formGroup: FormGroup;
  items: any;

  public servicios = [];
  public servicioSeleccionado: any;

  public tipoServicios = [];
  public tipoServicioSeleccionado: any;

  public availableHours: any[] = [];
  public selectedHours: any;


  constructor(
    private agendaService: AgendaService,
    private apiService: ApiService,
    private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      date: [null], // El FormControl para el campo "date"
    });
  }

  ngOnInit() {
    this.agenda=this.agendaService.obtenerAgenda();
    this.fetchData();
    this.generateAvailableHours();
    this.apiService.getAll("service").subscribe(res => {
      this.servicios = res as []
    });
  }

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

  newAgenda={
    fecha:'',
    id: '',
    nombre:'',
    correo: ''
  }

  getUser: any = {
    name:'',
    role:'C',
  };


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

  fetchData() {
    // Llama al método del servicio para obtener los datos

    this.apiService.getAllByFilters("listoreUser", this.getUser).subscribe(
      (response: any) => {
        this.agenda = response;
      },
      (error: any) => {
        // Maneja los errores aquí
        console.error('Error al obtener datos:', error);
      }
    );
  }




}
