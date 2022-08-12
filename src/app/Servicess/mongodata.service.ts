import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMongo } from 'src/Modals/Imongo';

@Injectable({
  providedIn: 'root'
})
export class MongoData {

 
  constructor(private http:HttpClient) { }

  getMongoData()
  {
    return this.http.get('https://nodeexpr.herokuapp.com/api/getproduct')
  }
  postMongoData(e:any)
  {
    return this.http.post('https://nodeexpr.herokuapp.com/api/insert',e)
  }

}