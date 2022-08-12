import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  active_number:number=1;
  constructor() { }

  ngOnInit(): void {
  }
  @Output() myevent= new EventEmitter<any>();
  toggle()
  {
    this.myevent.emit(false);
  }
}
