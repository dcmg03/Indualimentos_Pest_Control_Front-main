import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToastComponent } from '../toast/toast.component';
import { Servicio } from './servicio.model';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  @ViewChild(ToastComponent) private toastComponent!: ToastComponent;


  servicios: Servicio[] = [];

  labelBoton: string = "Registrar";

  constructor(
    private apiService: ApiService

  ) {

  }

  newService = {
    id: null as string | null,
    name: '',
    description: '',
    user: {
      id: localStorage.getItem('user')
    }
  }

  ngOnInit() {
    this.fetchData();
  }



  visible: boolean = false;

  showDialog(clear: boolean = false) {
    if (clear) {
      this.labelBoton = "Registrar";
      this.newService.name = '';
      this.newService.description = '';
    }
    this.visible = true;
  }

  showToast(severity: string, detail: string) {
    this.toastComponent.showToast(severity, detail);
  }

  agregar() {


    this.apiService.create("service", this.newService).subscribe(res => {
      this.fetchData();
      this.visible = false;
      this.newService.id = null;
      this.newService.name = '';
      this.newService.description = '';

      this.showToast("success", "Accion realizada correctamente");

    }, error => {
      this.showToast("error", "Error en la accion del servicio");
    });

  }


  fetchData() {
    this.apiService.getAll("service").subscribe(
      (response: any) => {
        this.servicios = response;
      },
      (error) => {
        this.showToast("error", "Error al obtener servicios: " + error);
      }
    );
  }


  delete(service: Servicio) {
    this.apiService.delete("service", service.id).subscribe(res => {
      this.showToast("success", "Servicio eliminado correctamente");
      this.fetchData();
    }, error => {
      this.showToast("error", "Error al eliminar servicio");
    });
  }


  update(service: Servicio) {

    this.labelBoton = "Actualizar";

    this.newService.id = service.id;
    this.newService.name = service.name;
    this.newService.description = service.description;

    this.showDialog(false);


  }

}





