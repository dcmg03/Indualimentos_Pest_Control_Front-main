import {Component} from '@angular/core';
import {Router} from "@angular/router";

enum InventoryStatus {
  InStock = 'In Stock',
  OutOfStock = 'Out of Stock',
  LimitedStock = 'Limited Stock',
}

interface Product {
  name: string;
  imageUrl: string;
  inventoryStatus?: InventoryStatus;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  items: any;
  products: any;
  responsiveOptions: any;


  constructor(private router: Router) {
    this.products = [
      {
        name: 'Producto 1',
        price: 10.99,
        inventoryStatus: InventoryStatus.OutOfStock,
        image: 'assets/layout/images/indupest/ima1.jpg'
      }// Nombre del archivo de imagen}
    ];
    this.responsiveOptions=[
       {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
    ]
    this.items = [
      {label: 'Inicio', icon: 'pi pi-home', routerLink: '/inicio'},
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
          {label: 'Ver Servicios', icon: 'pi pi-list', routerLink: '/ver-servicios'},
          {label: 'Agregar Servicios', icon: 'pi pi-plus', routerLink: '/agregar-servicios'}
        ]
      },

      {label: 'Clientes', icon: 'pi pi-clientes', routerLink: '/clientes'},
      //{ label: 'Agenda', icon: 'pi pi-calendar', routerLink: '/agenda' }
    ];
  }


  getSeverity(inventoryStatus
                :
                any
  ) {

  }
}
