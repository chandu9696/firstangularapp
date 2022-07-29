import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, fromEvent, map, Observable, tap,switchMap, debounceTime, Subscription, shareReplay, Subject, multicast ,ConnectableObservable} from 'rxjs';
import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  obs!:any;
  sub?:Subscription;
  GitUserData!:any
  @ViewChild('search',{static:true})
  search?:ElementRef<HTMLInputElement>

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const subject=new Subject<string>();
    const searchob=fromEvent(this.search!.nativeElement,"input").pipe(
      debounceTime(500),
      filter((data:any)=>data.target.value!=''),
      switchMap((data1:any)=>{
        console.log(data1.target.value)
        return this.http.get(`https://api.github.com/search/users?q=${data1.target.value}`)}
    //  return ajax(https://api.github.com/search/users?q=${data.target.value})
   ),
   map((data:any)=>{
    return data.items
  })
    )

    searchob.subscribe((data:any)=>{
      this.GitUserData=data
      console.log(data)
    })
    this.obs=new Observable((subscriber)=>{
      subscriber.next({name:'ram', veg:'true'})
      subscriber.next({name:'Sham', veg:'false'})
      subscriber.next({name:'Lakhan', veg:'true'})
      subscriber.complete()
    }).pipe(
    //   tap((item:any)=>{
    // if(item.name==='Sham')
    // {
    //   //side effects or to throw the error
    //   throw console.error("This is not allow");
      
    // }}),
      tap((items:any)=>{console.log('pipe')}),
      filter((item:any)=>item.veg==='true'),
      map((item:any)=>item.name),
      //hot observable 
      // shareReplay()
      multicast(subject)
    ) as ConnectableObservable<string>
    this.data()
    this.data()
    this.obs?.connect()
  }
  data()
  {
  this.sub=this.obs.subscribe(
    (value:any)=>console.log(value),
    (err:any)=>console.log(err),
    ()=>console.log('compledted')
  )
  }

  ngOnDestroy()
  {
    this.sub?.unsubscribe()
  }


}


