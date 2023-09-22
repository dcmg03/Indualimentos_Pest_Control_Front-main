import {Component,OnInit,ViewChild} from '@angular/core';
import {Cliente} from '../agregarcliente/cliente.model';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ClienteService} from './cliente.service';

import { AuthService } from 'src/app/services/auth.service';
import { ToastComponent } from '../toast/toast.component';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  clientes: Cliente[]=[];
  clienteEditado: Cliente | null = null;
  editarClienteForm: FormGroup;
  items: any;



  @ViewChild(ToastComponent) private toastComponent!: ToastComponent;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private authService: AuthService,
    private apiService: ApiService
  ) {

    this.editarClienteForm = this.formBuilder.group({
      id: [''],
      nombre: [''],
      apellido: [''],
      direccion: [''],
      telefono: [''],
      correo: [''],
    });

  }
  ngOnInit() {
    this.clientes=this.clienteService.obtenerClientes();
    this.fetchData();
  }

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

  newUser={
    name:'',
    user: '',
    correo: '',
    direccion:'',
    tipo:'C'
  }

  getUser: any = {
    name:'',
    role:'C',
  };


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

   fetchData() {
    // Llama al método del servicio para obtener los datos

    this.apiService.getAllByFilters("listoreUser", this.getUser).subscribe(
      (response: any) => {
        this.clientes = response;
      },
      (error: any) => {
        // Maneja los errores aquí
        console.error('Error al obtener datos:', error);
      }
    );
  }


   showToast(severity: string, detail: string) {
    this.toastComponent.showToast(severity, detail);
  }


   agregar(){

    this.authService.registerUser({
      address: this.newUser.direccion,
        name: this.newUser.name,
        role: this.newUser.tipo,
      credential: {
        mail: this.newUser.correo,
        userName: this.newUser.user
      },
    }).subscribe( res => {
      this.showToast('success', 'Usuario registrado con éxito.');
      this.visible = false;
      this.newUser.name='';
      this.newUser.user='';
      this.newUser.correo='';
      this.newUser.direccion='';
      this.newUser.tipo='';

      this.fetchData();

    },
    err => {
      this.showToast('error', 'Error registrar usuario.');
      console.error(err);
    })
   }


}



