import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetSearchData {

 search_hotel_s:string='';
  constructor(private http:HttpClient) { }
  setSearch(e:string)
  {
    this.search_hotel_s=e;
    // console.log(this.search_hotel_s)
    // return this.search_hotel_s
  }
  getSearch()
  {
    return this.search_hotel_s;
  }
//   getindData(id:any)
//   {
//     return this.http.get(`https://nodegfg.herokuapp.com/${id}`)
//   }
}
