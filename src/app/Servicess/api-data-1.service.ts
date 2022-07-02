import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiData1Service {


  constructor(private http:HttpClient) { }
  getImageUrl(no:any)
  {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos/${no}`)
  }
}
