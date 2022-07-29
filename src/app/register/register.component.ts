import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Servicess/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }

  submit(e:NgForm)
  {
    this.authservice.register(e.value.email,e.value.password,e.value.username)
  }
}
