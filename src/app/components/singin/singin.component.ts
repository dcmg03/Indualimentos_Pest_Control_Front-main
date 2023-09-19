import { Component, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/services/auth.service';

import { Router } from '@angular/router';



@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {

  constructor(public layoutService: LayoutService, private authService: AuthService, private router: Router) { }

  newUser={
    name:'',
    user: '',
    correo: '',
    direccion:''
  }



  singin(){
    console.log(this.newUser.name);
    console.log(this.newUser.user);
    console.log(this.newUser.correo);
    console.log(this.newUser.direccion);

    this.authService.register({
      credential: {
        mail: "juliethbecerra33@gmail.com",
        userName: this.newUser.user
      },
      user: {
        address: this.newUser.direccion,
        name: this.newUser.name,
        role: "A"
      }
    }).subscribe(res => {
      console.log(res);
    })
  }

  register(){
    console.log(this.newUser.name);
    console.log(this.newUser.user);
    console.log(this.newUser.correo);
    console.log(this.newUser.direccion);


   this.authService.register({
      credential: {
        mail: this.newUser.correo,
        userName: this.newUser.user
      },
      user: {
        address: this.newUser.direccion,
        name: this.newUser.name,
        role: "A"
      }
    }).subscribe((res:any) => {
      console.log(res);
      if(res){


        this.router.navigate(['./passwordChange'], { queryParams: { token: res.temporalToken } });
      }
    })
  }


  valCheck: string[] = ['remember'];




}
