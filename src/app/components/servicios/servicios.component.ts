import {Component, OnInit} from '@angular/core';
import {ServicioService} from './servicio.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
   servicios: any[]=[];

  constructor(private servicioService:ServicioService, private apiService: ApiService) {

  }

  ngOnInit(){
    this.apiService.getAll("service").subscribe(res => console.log(res));
    //this.apiService.create("service",{name: "Recoleccion", description: "Popo"}).subscribe(res => console.log(res))
  }
}





