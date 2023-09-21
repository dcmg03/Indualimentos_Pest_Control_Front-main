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
      },
      {
        name: 'Producto 2',
        price:10.99,
        inventoryStatus: InventoryStatus.OutOfStock,
        image: 'assets/layout/images/indupest/ima2.jpg'

      },
      {
        name: 'Producto 3',
        price:10.99,
        inventoryStatus: InventoryStatus.OutOfStock,
        image: 'assets/layout/images/indupest/ima3.jpg'

      },
      {
        name: 'Producto 4',
        price:10.99,
        inventoryStatus: InventoryStatus.OutOfStock,
        image: 'assets/layout/images/indupest/ima4.jpg'

      },
      {
        name: 'Producto 5',
        price:10.99,
        inventoryStatus: InventoryStatus.OutOfStock,
        image: 'assets/layout/images/indupest/ima5.jpg'

      },
      {
        name: 'Producto 6',
        price:10.99,
        inventoryStatus: InventoryStatus.OutOfStock,
        image: 'assets/layout/images/indupest/ima6.jpg'

      },
      {
        name: 'Producto 7',
        price:10.99,
        inventoryStatus: InventoryStatus.OutOfStock,
        image: 'assets/layout/images/indupest/ima7.jpg'

      },
      {
        name: 'Producto 8',
        price:10.99,
        inventoryStatus: InventoryStatus.OutOfStock,
        image: 'assets/layout/images/indupest/ima8.jpg'

      },
      {
        name: 'Producto 9',
        price:10.99,
        inventoryStatus: InventoryStatus.OutOfStock,
        image: 'assets/layout/images/indupest/ima9.jpg'

      }, {
        name: 'Producto 10',
        price:10.99,
        inventoryStatus: InventoryStatus.OutOfStock,
        image: 'assets/layout/images/indupest/ima10.jpg'

      }, {
        name: 'Producto 11',
        price:10.99,
        inventoryStatus: InventoryStatus.OutOfStock,
        image: 'assets/layout/images/indupest/ima11.jpg'

      }, {
        name: 'Producto 12',
        price:10.99,
        inventoryStatus: InventoryStatus.OutOfStock,
        image: 'assets/layout/images/indupest/ima12.jpg'

      },
    ];
    this.responsiveOptions = [
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
          {label: 'Ver Servicios', icon: 'pi pi-list', routerLink: '/servicios'},
          {label: 'Agregar Servicios', icon: 'pi pi-plus', routerLink: '/agregarservicio'}
        ]
      },

      {label: 'Clientes', icon: 'pi pi-clientes', routerLink: '/clientes'},
      //{ label: 'Agenda', icon: 'pi pi-calendar', routerLink: '/agenda' }
    ];
  }


}
