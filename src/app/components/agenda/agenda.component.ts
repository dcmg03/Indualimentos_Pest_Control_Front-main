
import {AgendaService} from './agenda.service';
import { ApiService } from 'src/app/services/api.service';
import { Agenda } from './agenda.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastComponent } from '../toast/toast.component';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  @ViewChild(ToastComponent) private toastComponent!: ToastComponent;
  agenda:Agenda[] = [];
  programacion: any[]=[];
  date:any;
  formGroup: FormGroup;
  items: any;

  labelBoton: string = "Registrar";
  role: any;
  selectedDate: string ='';

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
    this.role = localStorage.getItem("role");
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

  newAgenda: Agenda = {
    id: null,
    address: '',
    asigned_date: '',
    buy_date: '',
    user_id: ''
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
    this.apiService.getAll("buy").subscribe(
      (response: any) => {
        this.agenda = response;
      },
      (error) => {
        this.showToast("error", "Error al obtener servicios: " + error);
      }
    );
  }



  showToast(severity: string, detail: string) {
    this.toastComponent.showToast(severity, detail);
  }

  agregar() {
    // Realiza una solicitud POST para crear una nueva entrada de agenda en la base de datos
    this.apiService.create("agenda", this.newAgenda).subscribe(
      (res: any) => {
        this.fetchData();
        this.visible = false;

        this.newAgenda.id = null;
        this.newAgenda.address = '';
        this.newAgenda.asigned_date = '';
        this.newAgenda.buy_date = '';
        this.newAgenda.user_id = '';
        this.showToast("success", "Acción realizada correctamente");
      },
      (error: any) => {
        // Si hay un error en la solicitud, muestra un toast de error
        this.showToast("error", "Error en la acción del servicio");
      }
    );
  }





}
