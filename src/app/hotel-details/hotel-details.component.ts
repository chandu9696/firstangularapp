import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Ihotel } from 'src/Modals/Ihotel';
import { HotelData } from '../Servicess/hoteldata.service';


@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  id!:string|null;
  hotel_data!:Ihotel;
  isloading:boolean=false
  constructor(private activeroute:ActivatedRoute,private hoteldata:HotelData) { }

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe((params:ParamMap)=>{
      this.isloading=true
      this.id=params.get('id');
      
      this.hoteldata.getindData(this.id).subscribe((data:any)=>{
      
        // console.log(data)
        this.hotel_data=data;
        console.log(this.hotel_data)
        this.isloading=false

      })
    })
  }

}
