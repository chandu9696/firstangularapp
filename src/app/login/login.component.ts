import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { AuthService } from '../Servicess/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email=new FormControl("",[
    Validators.required,
    Validators.email
  ])
  password=new FormControl("",[
    Validators.required,
    Validators.minLength(6)
  ])
  loginForm=new FormGroup({
    email:this.email,
    password:this.password
  })
  constructor(private router:Router,private authservice1:AuthService) { }

  ngOnInit(): void {
  }
 
 
  Navigate_home()
  {
    console.log(this.loginForm.value.email)
    console.log(this.authservice1.setter())
    this.authservice1.login(this.loginForm.value.email,this.loginForm.value.password)
   
    // this.router.navigate(['/signup'])
  }

  home()
  {
    this.router.navigate(['/'])
  }
}
