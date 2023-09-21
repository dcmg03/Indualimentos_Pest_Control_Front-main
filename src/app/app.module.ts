
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import {CarouselModule} from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';

import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';



// nuevos modulos
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PrincipalComponent } from './components/principal/principal.component';
import { SinginComponent } from './components/singin/singin.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { AgrEmpleadoComponent } from './components/agr-empleado/agr-empleado.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AgregarservicioComponent } from './components/agregarservicio/agregarservicio.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AgregarclienteComponent } from './components/agregarcliente/agregarcliente.component';
import "@angular/common/http"
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { ToastComponent } from './components/toast/toast.component';
import {MenubarModule} from "primeng/menubar";
import {TagModule} from "primeng/tag";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    SinginComponent,
    AdminComponent,
    EmpleadoComponent,
    AgrEmpleadoComponent,
    ServiciosComponent,
    AgendaComponent,
    AgregarservicioComponent,
    ClientesComponent,
    AgregarclienteComponent,
    PasswordChangeComponent,
    ToastComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    PasswordModule,
    CheckboxModule,
    CarouselModule,
    HttpClientModule,
    ChipModule,
    TableModule,
    InputTextModule,
    ToastModule,
    MenubarModule,
    CascadeSelectModule,
    CalendarModule,
    TagModule,
    DialogModule,
    DropdownModule
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
