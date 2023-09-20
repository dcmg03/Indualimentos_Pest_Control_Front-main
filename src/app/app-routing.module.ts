
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrincipalComponent} from './components/principal/principal.component';
import {LoginComponent} from './components/login/login.component';
import {SinginComponent} from './components/singin/singin.component';
import {AdminComponent} from './components/admin/admin.component';
import {EmpleadoComponent} from './components/empleado/empleado.component';
import {ServiciosComponent} from './components/servicios/servicios.component';
import {AgendaComponent} from "./components/agenda/agenda.component";
import {AgregarservicioComponent} from "./components/agregarservicio/agregarservicio.component";
import {ClientesComponent} from "./components/clientes/clientes.component";
import {AgregarclienteComponent} from "./components/agregarcliente/agregarcliente.component";
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import {AgrEmpleadoComponent} from "./components/agr-empleado/agr-empleado.component";

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'singin', component: SinginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'agenda', component:AgendaComponent},
  {path: 'agregarservicio',component:AgregarservicioComponent},
  {path: 'clientes',component:ClientesComponent},
  {path: 'agregarcliente',component:AgregarclienteComponent},
  {path: 'homePage', component: PrincipalComponent},
  {path: 'passwordChange', component: PasswordChangeComponent},
  {path: 'agregarempleado', component:AgrEmpleadoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'homePage'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
