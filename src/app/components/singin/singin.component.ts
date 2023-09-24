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



  register(){

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
      if(res){
        this.router.navigate(['./passwordChange'], { queryParams: { token: res.temporalToken } });
      }
    })
  }


  valCheck: string[] = ['remember'];




}
