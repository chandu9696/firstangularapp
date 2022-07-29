import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ihotel } from 'src/Modals/Ihotel';
import { HotelData1 } from '../Servicess/Fav_hotel.service';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  @Input() f!:Ihotel;
  constructor(private router:Router,private hoteldata:HotelData1) { }

  ngOnInit(): void {
  }
  go(id:number)
  {
    this.router.navigate(['hotel/',id])

  }
  addtofav(e:Ihotel)
  {
    this.hoteldata.addFavItem(e)
  }

}
