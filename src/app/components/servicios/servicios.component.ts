import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToastComponent } from '../toast/toast.component';
import { Servicio, TipoServicio } from './servicio.model';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  @ViewChild(ToastComponent) private toastComponent!: ToastComponent;


  servicios: Servicio[] = [];
  tipoServicios: TipoServicio[] = [];

  public serviceSelected: any;

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

  newTipoService = {
    id: null as string | null,
    name: '',
    value: '',
    service: {

    }
  }

  ngOnInit() {
    this.fetchData();
    this.fetchDataKindOf();
  }

  visible: boolean = false;
  visible2: boolean = false;

  showDialog(clear: boolean = false, popupNumber: number) {
    if (clear) {
      this.labelBoton = "Registrar";
      this.newService.name = '';
      this.newService.description = '';
    }
    if(popupNumber === 0){
      this.visible = true;
    } else {
      this.visible2 = true;
    }

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


  agregarTipoServicio(){
    this.newTipoService.service = {
      id: this.serviceSelected.id
    };
    this.apiService.create("kindOfService", this.newTipoService).subscribe(res =>{
      this.fetchDataKindOf();
      this.visible = false;
      this.newTipoService.id = null;
      this.newTipoService.name = '';
      this.newTipoService.value= '';
      this.newTipoService.service = '';
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

  fetchDataKindOf(){
    this.apiService.getAll("kindOfService").subscribe(
      (response: any) => {
        this.tipoServicios = response;
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

  deleteKindOf(service: any) {
    this.apiService.delete("kindOfService", service.id).subscribe(res => {
      this.showToast("success", "Servicio eliminado correctamente");
      this.fetchDataKindOf();
    }, error => {
      this.showToast("error", "Error al eliminar servicio");
    });
  }


  update(service: Servicio) {

    this.labelBoton = "Actualizar";

    this.newService.id = service.id;
    this.newService.name = service.name;
    this.newService.description = service.description;

    //this.showDialog(false);
  }

}





