import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Servicess/auth.service';
import { SetSearchData } from '../Servicess/SetSearch.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  search_hotel:string='';
  islogin:boolean=false;
  constructor(private search_data:SetSearchData,private authservice1:AuthService) { }

  ngOnInit(): void {
  }
  onChange(e:any)
  {
    this.search_data.setSearch(this.search_hotel)
  }
  check()
  {
    console.log(this.authservice1.status())

    // if(this.authservice1.status().displayName)
    return this.authservice1.status()
   
  }
  logout()
  {
    this.authservice1.logOut()
  }
}
