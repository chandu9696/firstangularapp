import { Component, OnInit,OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api1 } from 'src/Modals/api1';
import { ApiData1Service } from '../Servicess/api-data-1.service';
@Component({
  selector: 'app-api-data1',
  templateUrl: './api-data1.component.html',
  styleUrls: ['./api-data1.component.css']
})
export class ApiData1Component implements OnInit {
  // http:HttpClient;
  api_url!:string;
  no:number=1;
  constructor(private api_data:ApiData1Service) { 
    // this.http=http
  }

  ngOnInit(): void {

    this.fetchData()
  
  }
  

  fetchData()
  {
    this.api_data.getImageUrl(this.no).subscribe((data:any)=>{console.log(data);
    this.api_url=data.url

    console.log(this.api_data)
  console.log(typeof(data))})
  }
  increment()
  {
    this.no=this.no+1;
    console.log(this.no)
    this.fetchData()
  }

}
