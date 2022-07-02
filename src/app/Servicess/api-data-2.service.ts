import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiData2Service {


  constructor(private http:HttpClient) { }
  getImage(page:any)
  {
    return this.http.get(`https://reqres.in/api/users?page=${page}`)
  }
}
