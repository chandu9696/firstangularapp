import { Component, OnInit } from '@angular/core';
import { Ihotel } from 'src/Modals/Ihotel';
import { HotelData } from '../Servicess/hoteldata.service';
import { SetSearchData } from '../Servicess/SetSearch.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotel_data!:Ihotel[];
  f:any;
  isloading:boolean=false
  search_hotel_h:string='';
  search_string:string='';
  constructor(private hoteldata:HotelData,private search_data:SetSearchData) { }

  ngOnInit(): void {

    this.fetchData()
    this.search_data.setSearch('')
    
  }
  getsearchdata()
  {
    this.search_hotel_h=this.search_data.getSearch()
    // console.log(this.search_hotel_h)
  }
  SetSearch_h(e:string)
  {
    this.search_string=e;
    // console.log(e)
  }
  fetchData()
  {
    this.isloading=true
    this.hoteldata.getHotelData().subscribe((data:any)=>{
    this.hotel_data=data;
    this.isloading=false});
  }
  Status():any
  {
   
    if(this.search_string.toLowerCase().includes(this.search_hotel_h.toLowerCase()))
    return true;
  }
}
