import { Component, ViewChild, OnInit } from '@angular/core';

import { ToastComponent } from '../toast/toast.component';
import { ActivatedRoute } from '@angular/router';

import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import PasswordChange from 'src/app/models/passwordChange';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  token: string = '';
  private toastComponentInitialized = false;

  passwordToChange: PasswordChange = {
    password: '',
    token: '',
    code: ''
   }

  @ViewChild(ToastComponent) private toastComponent!: ToastComponent;

  constructor(
    private route: ActivatedRoute,
    public layoutService: LayoutService,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    // Obtén el valor del parámetro 'token' de la URL
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log(this.token);

      if (this.toastComponent && this.token !== undefined && !this.toastComponentInitialized) {
        this.showToast('success', 'Usuario creado con éxito.');
        this.showToast('info', 'Revise el correo.');

        this.toastComponentInitialized = true;
      }
    });
  }

  newUser = {
    code: '',
    passwordA: '',
    passwordB: '',

  }



  showToast(severity: string, detail: string) {
    this.toastComponent.showToast(severity, detail);
  }

  register() {

    if (this.newUser.passwordA !== this.newUser.passwordB) {
      // Las contraseñas no coinciden, muestra un mensaje en el toast
      this.showToast('warn', 'Las contraseñas no coinciden.');
      return; // Evita que el formulario se envíe
    }
    if (this.newUser.passwordA === '' || this.newUser.passwordB === '') {
      // Las contraseñas no coinciden, muestra un mensaje en el toast
      this.showToast('warn', 'Las contraseñas no pueden estar vacias.');
      return; // Evita que el formulario se envíe
    }

    this.passwordToChange.token = this.token;
    this.passwordToChange.password = this.newUser.passwordA;
    this.passwordToChange.code = this.newUser.code;

    console.log(this.passwordToChange);


    this.authService.changePassword(this.passwordToChange).subscribe(
      res => {
        this.showToast('success', 'Contraseña cambiada con éxito.');
        this.router.navigate(['/login']);
      },
      err => {
        this.showToast('error', 'Error al cambiar la contraseña.');
        console.error(err);
      }
    );


    console.log(this.token);



  }

  valCheck: string[] = ['remember'];
}
