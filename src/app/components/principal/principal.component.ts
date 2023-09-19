import {Component} from '@angular/core';

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
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  constructor() {
    this.items=[
      { label: 'Iniciar sesión', icon: 'pi pi-sign-in', command: () => this.login() },
    ];
  }
  login() {

}
  items: any;
  products: Product[] = [
    {
      name: 'Producto 1',
      imageUrl: 'assets/layout/images/indupest/ima1.jpg',
      inventoryStatus: InventoryStatus.InStock
    },
    {
      name: 'Producto 2',
      imageUrl: 'assets/layout/images/indupest/ima2.jpg',
      inventoryStatus: InventoryStatus.OutOfStock
    },
    {
      name: 'Producto 3',
      imageUrl: 'assets/layout/images/indupest/ima3.jpg',
      inventoryStatus: InventoryStatus.OutOfStock
    },
    {
      name: 'Producto 4',
      imageUrl: 'assets/layout/images/indupest/ima4.jpg',
      inventoryStatus: InventoryStatus.OutOfStock
    },
    {
      name: 'Producto 5',
      imageUrl: 'assets/layout/images/indupest/ima5.jpg',
      inventoryStatus: InventoryStatus.InStock
    },
    {
      name: 'Producto 6',
      imageUrl: 'assets/layout/images/indupest/ima6.jpg',
      inventoryStatus: InventoryStatus.OutOfStock
    },
    {
      name: 'Producto 7',
      imageUrl: 'assets/layout/images/indupest/ima7.jpg',
      inventoryStatus: InventoryStatus.OutOfStock
    },
    {
      name: 'Producto 8',
      imageUrl: 'assets/layout/images/indupest/ima8.jpg',
      inventoryStatus: InventoryStatus.OutOfStock
    },
    {
      name: 'Producto 9',
      imageUrl: 'assets/layout/images/indupest/ima9.jpg',
      inventoryStatus: InventoryStatus.OutOfStock
    }, {
      name: 'Producto 10',
      imageUrl: 'assets/layout/images/indupest/ima10.jpg',
      inventoryStatus: InventoryStatus.OutOfStock
    }, {
      name: 'Producto 11',
      imageUrl: 'assets/layout/images/indupest/ima11.jpg',
      inventoryStatus: InventoryStatus.OutOfStock
    }, {
      name: 'Producto 12',
      imageUrl: 'assets/layout/images/indupest/ima12.jpg',
      inventoryStatus: InventoryStatus.OutOfStock
    },
    // Agrega más objetos de producto con la información de las imágenes
  ];

  carouselResponsiveOptions: any[] = [
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
  ];



}
