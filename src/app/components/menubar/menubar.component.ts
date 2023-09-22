import {Component} from '@angular/core';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {

  role:any
  items: any;

  constructor() {

  }

  ngOnInit() {
    this.role = localStorage.getItem("role");
    console.log(this.role);

    if (this.role === "E") {
      this.items = [
        { label: 'Inicio', icon: 'pi pi-home', routerLink: '/admin' },
        {
          label: 'Servicios',
          icon: 'pi pi-briefcase',
          items: [{ label: 'Ver Servicios', icon: 'pi pi-list', routerLink: '/servicios' }]
        },
        { label: 'Clientes', icon: 'pi pi-clientes', routerLink: '/clientes' },
        { label: 'Agenda', icon: 'pi pi-agenda', routerLink: '/agenda' }
      ];
    }

    if (this.role === "C") {
      this.items = [
        { label: 'Inicio', icon: 'pi pi-home', routerLink: '/admin' },
        {
          label: 'Servicios',
          icon: 'pi pi-briefcase',
          items: [{ label: 'Ver Servicios', icon: 'pi pi-list', routerLink: '/servicios' }]
        },
        { label: 'Agenda', icon: 'pi pi-agenda', routerLink: '/agenda' }
      ];
    }

    if (this.role === "A") {
      this.items = [
        { label: 'Inicio', icon: 'pi pi-home', routerLink: '/admin' },
        {
          label: 'Empleados', icon: 'pi pi-users',
          items: [
            { label: 'Ver Empleados', icon: 'pi pi-verempleado', routerLink: '/verempleado' },
            { label: 'Agregar Empleado', icon: 'pi pi-agempleado', routerLink: '/agregarempleado' }
          ]
        },
        {
          label: 'Servicios',
          icon: 'pi pi-briefcase',
          items: [{ label: 'Ver Servicios', icon: 'pi pi-list', routerLink: '/servicios' }]
        },
        { label: 'Clientes', icon: 'pi pi-clientes', routerLink: '/clientes' },
        { label: 'Agenda', icon: 'pi pi-agenda', routerLink: '/agenda' }
      ];
    }
  }

}
