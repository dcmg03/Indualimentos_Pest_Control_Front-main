import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  constructor(private router: Router) {
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
