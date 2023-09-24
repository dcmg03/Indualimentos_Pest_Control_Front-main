import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  user={
    user: '',
    password: ''
  }


  login(){

    this.authService.login({
      mail: this.user.user,
      password: this.user.password
    }).subscribe((res:any)=>{

      for (const key of Object.keys(res)) {
        localStorage.setItem(key, (res[key]));
      }

      if(res.role==="A"){
        this.router.navigate(['/admin']);
      }

      if(res.role==="C"){
        this.router.navigate(['cliente']);
      }

      if(res.role==="E"){
        this.router.navigate(['/empleadoo']);
      }



    })
  }

  valCheck: string[] = ['remember'];
  items: any;



  constructor(public layoutService: LayoutService, private authService: AuthService, private router:Router) {
    this.items=[
       {label: 'Inicio', icon: 'pi pi-home', routerLink: '/inicio'}

    ]
  }

}
