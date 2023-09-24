import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-agr-empleado',
  templateUrl: './agr-empleado.component.html',
  styleUrls: ['./agr-empleado.component.css']
})
export class AgrEmpleadoComponent {
  newempleado={
    name:'',
    cedula: '',
    apellido: '',
    contacto:'',
    arl: ''
  }

  singin(){

  }

  valCheck: string[] = ['remember'];
  items: any;

  constructor(public layoutService: LayoutService) {
    this.items=[
      {label: 'Inicio', icon: 'pi pi-home', routerLink: '/inicio'}
    ];

  }


}
