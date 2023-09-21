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
    console.log(this.newempleado.name);
    console.log(this.newempleado.cedula);
    console.log(this.newempleado.apellido);
    console.log(this.newempleado.contacto);
    console.log(this.newempleado.arl);
  }

  valCheck: string[] = ['remember'];
  items: any;

  constructor(public layoutService: LayoutService) {
    this.items=[
      {label: 'Inicio', icon: 'pi pi-home', routerLink: '/inicio'}
    ];

  }


}
