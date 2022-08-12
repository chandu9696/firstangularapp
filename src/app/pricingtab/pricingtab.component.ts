import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-pricingtab',
  templateUrl: './pricingtab.component.html',
  styleUrls: ['./pricingtab.component.css']
})
export class PricingtabComponent implements OnInit {
  status:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event:any) {

    if(window.pageYOffset>500)
    {
      this.status=true
      console.log('claed')
    }
    else
    {
      this.status=false
    }
  }

}