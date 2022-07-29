import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ihotel } from 'src/Modals/Ihotel';

@Injectable({
  providedIn: 'root'
})
export class HotelData {

  fav_hotel:Ihotel[]=[];
  constructor(private http:HttpClient) { }
  getHotelData()
  {
    return this.http.get(`https://nodegfg.herokuapp.com/a`)
  }
  getindData(id:any)
  {
    return this.http.get(`https://nodegfg.herokuapp.com/${id}`)
  }
  addFavItem(e:Ihotel)
  {
    this.fav_hotel.push(e)
    console.log(this.fav_hotel)
  }
  getFavItem()
  {
    console.log(this.fav_hotel)
    return this.fav_hotel;
  }
}
