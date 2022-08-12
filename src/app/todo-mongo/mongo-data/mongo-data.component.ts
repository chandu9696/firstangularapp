import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MongoData } from 'src/app/Servicess/mongodata.service';
import { IMongo } from 'src/Modals/Imongo';

@Component({
  selector: 'app-mongo-data',
  templateUrl: './mongo-data.component.html',
  styleUrls: ['./mongo-data.component.css']
})
export class MongoDataComponent implements OnInit {

  Data:IMongo[]=[];
  toggleindicate:boolean=false

  Name=new FormControl("",[
    Validators.required,
  ])
  modal=new FormControl("",[
    Validators.required,

  ])
  price=new FormControl("",[
    Validators.required,

  ])
  category=new FormControl("",[
    Validators.required,

  ])
  loginForm=new FormGroup({
    Name:this.Name,
    modal:this.modal,
    price:this.price,
    category:this.category
  })
 
  constructor(private mongo:MongoData) { }

  ngOnInit(): void {
    

    this.fetchData()
  }
  toggleIndicator()
  {
    this.toggleindicate?this.toggleindicate=false:this.toggleindicate=true;
 
  }
  fetchData()
  {
    this.mongo.getMongoData().subscribe((data:any)=>{

      this.Data=data
  })
  }
  check_value()
  {
    this.mongo.postMongoData(this.loginForm.value).subscribe((data)=>{console.log(data);
      this.fetchData()})
    
    console.log(this.loginForm.value)
  }

}
