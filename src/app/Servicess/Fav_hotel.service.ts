import { Injectable } from '@angular/core';
import { Ihotel } from 'src/Modals/Ihotel';

@Injectable({
  providedIn: 'root'
})
export class HotelData1 {

  fav_hotel:Ihotel[]=[];
  constructor() { }

  addFavItem(e:Ihotel)
  {
    if(this.fav_hotel.indexOf(e)==-1)
    this.fav_hotel=[...this.fav_hotel,e]
    console.log(this.fav_hotel)
  }
  getFavItem()
  {
    console.log(this.fav_hotel)
    return [...this.fav_hotel];
  }
}
