import { Component, OnInit } from '@angular/core';
import { Ihotel } from 'src/Modals/Ihotel';
import { HotelData1 } from '../Servicess/Fav_hotel.service';


@Component({
  selector: 'app-fav-hotel',
  templateUrl: './fav-hotel.component.html',
  styleUrls: ['./fav-hotel.component.css']
})
export class FavHotelComponent implements OnInit {
  fav_hotel:Ihotel[]=[]
  constructor(private hoteldata:HotelData1) { }

  ngOnInit(): void {
   
  }

  getFavhotel()
  {
    this.fav_hotel=this.hoteldata.getFavItem()
    console.log(this.fav_hotel)
  }
}


