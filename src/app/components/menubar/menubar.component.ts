import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {

  role: any
  items: any;


  constructor(private router: Router, private route: ActivatedRoute) {

  }

  logout() {
    // Elimina el elemento "role" del localStorage
    localStorage.removeItem("Status");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(['/homePage'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve', // Preserva los parámetros de consulta
      skipLocationChange: true // Evita que aparezca en el historial del navegador


    });


    // Otros pasos de cierre de sesión, si es necesario
  }

  ngOnInit() {

    this.role = localStorage.getItem("role");

    if (this.role === "E") {
      this.items = [
        {label: 'Inicio', icon: 'pi pi-home', routerLink: '/empleadoo'},
        {
          label: 'Servicios',
          icon: 'pi pi-briefcase',
          items: [{label: 'Ver Servicios', icon: 'pi pi-list', routerLink: '/servicios'}]
        },
        {label: 'Clientes', icon: 'pi pi-user', routerLink: '/clientes'},
        {label: 'Agenda', icon: 'pi pi-calendar', routerLink: '/agenda'}
      ];
    }

    if (this.role === "C") {
      this.items = [
        {label: 'Inicio', icon: 'pi pi-home', routerLink: '/cliente'},
        {
          label: 'Servicios',
          icon: 'pi pi-briefcase',
          items: [{label: 'Ver Servicios', icon: 'pi pi-list', routerLink: '/servicios'}]
        },
        {label: 'Agenda', icon: 'pi pi-calendar', routerLink: '/agenda'}
      ];
    }

    if (this.role === "A") {
      this.items = [
        {label: 'Inicio', icon: 'pi pi-home', routerLink: '/admin'},
        {
          label: 'Empleados', icon: 'pi pi-users',
          items: [
            {label: 'Ver Empleados', icon: 'pi pi-verempleado', routerLink: '/empleado'},
            //{ label: 'Agregar Empleado', icon: 'pi pi-agempleado', routerLink: '/agregarempleado' }
          ]
        },
        {
          label: 'Servicios',
          icon: 'pi pi-briefcase',
          items: [{label: 'Ver Servicios', icon: 'pi pi-briefcase', routerLink: '/servicios'}]
        },
        {label: 'Clientes', icon: 'pi pi-user', routerLink: '/clientes'},
        {label: 'Agenda', icon: 'pi pi-calendar', routerLink: '/agenda'}
      ];


    }
  }

}
