import { Component } from '@angular/core';
// import { IUser } from 'src/Modals/user';

import { AuthService } from './Servicess/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'firstangularapp';

  
    constructor(private authservice1:AuthService){}
    ngOnInit(){
      console.log("call")
      this.authservice1.setter()
    }
   
  // mobileNumber:string='9970424520'

  // obj:IUser[]=[
  //   {name:'ram',age:20},
  //   {name:'ram',age:20},
  //   {name:'ram',age:20}
  // ]
  // receivedata(e:any)
  // {
  //   console.log(e)
  // }
}
