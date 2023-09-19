import {Component,OnInit} from '@angular/core';
import {Cliente} from '../agregarcliente/cliente.model';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ClienteService} from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  clientes: Cliente[]=[];
  clienteEditado: Cliente | null = null;
  editarClienteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService
  ) {

    this.editarClienteForm = this.formBuilder.group({
      id: [''],
      nombre: [''],
      apellido: [''],
      direccion: [''],
      telefono: ['']
    });

  }
  ngOnInit() {
    this.clientes=this.clienteService.obtenerClientes();
  }

  editarCliente(cliente: Cliente) {
    this.clienteEditado = cliente;
    this.editarClienteForm.patchValue(cliente);
  }
   guardarCambios() {
     if (this.clienteEditado) {
       // 3. Escuchar los cambios realizados en el formulario de edición.
       // Los datos editados se encuentran en this.editarClienteForm.value.

       // 4. Cuando el usuario confirma los cambios, actualiza el cliente en la fuente de datos.
       this.clienteService.actualizarCliente(this.editarClienteForm.value)
         .subscribe((clienteActualizado) => {
           // 5. Después de la edición, actualiza la lista de clientes en tu componente para reflejar los cambios.
           // Actualiza el cliente en la lista de clientes con los datos actualizados.
           const index = this.clientes.findIndex(c => c.id === clienteActualizado.id);
           if (index !== -1) {
             this.clientes[index] = clienteActualizado;
           }

           // Limpia el formulario y restablece la variable clienteEditado.
           this.editarClienteForm.reset();
           this.clienteEditado = null;
         });
     }
   }

}
