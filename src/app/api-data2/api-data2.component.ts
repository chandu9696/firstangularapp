import { Component, OnInit } from '@angular/core';
import { ApiData2Service } from '../Servicess/api-data-2.service';

@Component({
  selector: 'app-api-data2',
  templateUrl: './api-data2.component.html',
  styleUrls: ['./api-data2.component.css']
})
export class ApiData2Component implements OnInit {

  constructor(private api_data:ApiData2Service) { }
  page:number=1;
  data_users:any;
  search_string:string="";
  search_text:string='';
  // const seach_string=user.first_name+user.last_name
  ngOnInit(): void {
    this.fetchData()
  }
  
  fetchData()
  {
    this.api_data.getImage(this.page).subscribe((data:any)=>{console.log(data)
    this.data_users=data.data
   
 
    console.log(this.data_users)});
    
  }
  SetSearch(f:any,l:any)
  {
    this.search_string=f+l;
  }
  Changepage(no:any)
  {
    this.page=no;
    console.log(this.search_text)
    this.fetchData();
  }
  Status():any
  {
   
    if(this.search_string.includes(this.search_text))
    return true;
  }
}