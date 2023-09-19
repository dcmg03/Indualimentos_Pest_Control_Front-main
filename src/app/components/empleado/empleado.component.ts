import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  items: any;
  constructor(private router: Router) {
    this.items=[
      { label: 'Inicio', icon: 'pi pi-home', routerLink: '/inicio' },
      {
        label: 'Servicios',
        icon: 'pi pi-briefcase',
        items: [
          { label: 'Ver Servicios', icon: 'pi pi-list', routerLink: '/ver-servicios' },
          { label: 'Agregar Servicios', icon: 'pi pi-plus', routerLink: '/agregar-servicios' }
        ]
      },
      { label: 'Clientes', icon: 'pi pi-users', routerLink: '/clientes' },
      { label: 'Agenda', icon: 'pi pi-calendar', routerLink: '/agenda' }
    ];
  }

  verServicios(){
    this.router.navigate(['/servicios'])

  }
  verAgenda(){
    this.router.navigate(['/agenda'])
  }
  verClientes(){
    this.router.navigate(['/clientes'])
  }
}
