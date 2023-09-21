import {Component} from '@angular/core';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  items: any;

  constructor() {
    this.items = [
      {label: 'Inicio', icon: 'pi pi-home', routerLink: '/admin'},
      {
        label: 'Empleados', icon: 'pi pi-users',
        items: [
          {label: 'Ver Empleados', icon: 'pi pi-verempleado', routerLink: '/verempleado'},
          {label: 'Agregar Empleado', icon: 'pi pi-agempleado', routerLink: '/agregarempleado'}
        ]
      },
      {
        label: 'Servicios',
        icon: 'pi pi-briefcase',
        items: [
          {label: 'Ver Servicios', icon: 'pi pi-list', routerLink: '/servicios'},
          {label: 'Agregar Servicios', icon: 'pi pi-plus', routerLink: '/agregarservicio'}
        ]
      },

      {label: 'Clientes', icon: 'pi pi-clientes', routerLink: '/clientes'},
      {label: 'Agenda',icon: 'pi pi- agenda', routerLink: '/agenda'
      }
    ];
  }

}
