import {Component,OnInit,ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Empleado} from '../agr-empleado/empleado.model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastComponent } from '../toast/toast.component';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmpleadoService} from './empleado.service'

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleados: Empleado[]=[];
  empleadoEditado: Empleado | null = null;
  editarEmpleadoForm: FormGroup;
  items: any;

  @ViewChild(ToastComponent) private toastComponent!: ToastComponent;


  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private empleadoService: EmpleadoService
    ) {

      this.editarEmpleadoForm = this.formBuilder.group({
        id: [''],
        nombre: [''],
        apellido: [''],
        direccion: [''],
        telefono: [''],
        correo: [''],
      });

  }

  ngOnInit() {
    this.empleados=this.empleadoService.obtenerEmpleados();
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
    tipo:'E'
  }

  getUser: any = {
    name:'',
    role:'E',
  };

  editarCliente(empleado: Empleado) {
    this.empleadoEditado = empleado;
    this.editarEmpleadoForm.patchValue(empleado);
  }
   guardarCambios() {
     if (this.empleadoEditado) {
       // 3. Escuchar los cambios realizados en el formulario de edición.
       // Los datos editados se encuentran en this.editarClienteForm.value.

       // 4. Cuando el usuario confirma los cambios, actualiza el cliente en la fuente de datos.
       this.empleadoService.actualizarEmpleado(this.editarEmpleadoForm.value)
         .subscribe((clienteActualizado) => {
           // 5. Después de la edición, actualiza la lista de clientes en tu componente para reflejar los cambios.
           // Actualiza el cliente en la lista de clientes con los datos actualizados.
           const index = this.empleados.findIndex(c => c.id === clienteActualizado.id);
           if (index !== -1) {
             this.empleados[index] = clienteActualizado;
           }

           // Limpia el formulario y restablece la variable clienteEditado.
           this.editarEmpleadoForm.reset();
           this.empleadoEditado = null;
         });
     }
   }


  fetchData() {
    // Llama al método del servicio para obtener los datos

    this.apiService.getAllByFilters("listoreUser", this.getUser).subscribe(
      (response: any) => {
        this.empleados = response;
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
    console.log(this.newUser.name);
    console.log(this.newUser.user);
    console.log(this.newUser.correo);
    console.log(this.newUser.direccion);
    console.log(this.newUser.tipo);

    this.authService.register({
      credential: {
        mail: this.newUser.correo,
        userName: this.newUser.user
      },
      user: {
        address: this.newUser.direccion,
        name: this.newUser.name,
        role: this.newUser.tipo
      }
    }).subscribe( (res:any) => {
      this.showToast('success', 'Usuario registrado con éxito.');
      this.visible = false;
      this.newUser.name='';
      this.newUser.user='';
      this.newUser.correo='';
      this.newUser.direccion='';
      this.newUser.tipo='';

      this.fetchData();

    },
    (err:any) => {
      this.showToast('error', 'Error registrar usuario.');
      console.error(err);
    })
   }

}







