import {Component,OnInit,ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Cliente} from '../agregarcliente/cliente.model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {


  items: any;
  clientes: Cliente[]=[];


  @ViewChild(ToastComponent) private toastComponent!: ToastComponent;


  constructor(private router: Router,private apiService: ApiService,  private authService: AuthService,) {
    this.items=[
      { label: 'Inicio', icon: 'pi pi-home', routerLink: '/inicio' },
      {
        label: 'Servicios',
        icon: 'pi pi-briefcase',
        items: [
          { label: 'Ver Servicios', icon: 'pi pi-list', routerLink: '/ver-servicios' },
          { label: 'Agregar Servicios', icon: 'pi pi-plus', routerLink: '/agregar-servicios' }
        ]
      },
      { label: 'Clientes', icon: 'pi pi-users', routerLink: '/clientes' },
      { label: 'Agenda', icon: 'pi pi-calendar', routerLink: '/agenda' }
    ];
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



  ngOnInit() {

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







