import { Component, OnInit,Input,Output,EventEmitter,OnChanges,OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnChanges,OnDestroy{

  @Input() name!:string;
  @Input() age!:number;
  //Life Cycle Hook
  //Main difference here is construtor for class instance and ngInit for component
  //Yes contrutor will get call first but it dont have a access of @Input varibles bacause at that point componnent was not crerated
  //Onchanges will call whenever the their is change in @Input data
  //Ondestroy mehtod is used to clean up activity process , settimeout example was shared
  constructor()
  {
      console.log("This will call when Class instance is created")

  }
  ngOnInit(): void {
     console.log("This will called when component created")
     //Init
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("This will call when any changes in data")
    console.log(changes)
  }
  ngOnDestroy(): void {
    console.log("This is used to clean up memory when component destroy")
  }
  @Output() myevent= new EventEmitter<any>();
  obj={name:"parent",status:'active'}
  passdata()
  {
    this.myevent.emit(this.obj);
    console.log('passed')
  }

}
