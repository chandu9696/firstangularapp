import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Itodo } from 'src/Modals/todoInfo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  toggleindicate:boolean=false
  ListOfTodoItems:Array<Itodo>=[]
  objIndex:number=-1
  description=new FormControl("",[
    Validators.required,
  ])
  urgency=new FormControl("",[
    Validators.required,

  ])
  loginForm=new FormGroup({
    description:this.description,
    urgency:this.urgency
  })
  constructor() { }

  ngOnInit(): void {
    this.loginForm.get('urgency')?.setValue('low')
  }
  toggleIndicator()
  {
    this.toggleindicate?this.toggleindicate=false:this.toggleindicate=true;
 
  }
  check_value()
  {
    console.log(this.loginForm.value)
  
    if(this.objIndex!=-1)
    {
      this.ListOfTodoItems[this.objIndex].description = this.loginForm.value.description
      this.ListOfTodoItems[this.objIndex].urgency = this.loginForm.value.urgency
      this.objIndex=-1
      this.loginForm.get('description')?.setValue("")
      // this.loginForm.get('urgency')?.setValue("")
    }
    else
    {
      // const data={description:this.loginForm.value.description as string,urgency:this.loginForm.value.urgency as string}
    this.ListOfTodoItems.push(this.loginForm.value)
    console.log(this.ListOfTodoItems)
    this.loginForm.get('description')?.setValue("")
      // this.loginForm.get('urgency')?.setValue("")
    }

    this.toggleIndicator()
  }
  update_Todo(description:any,urgency:any)
  {

    this.loginForm.get('description')?.setValue(description)
    this.loginForm.get('urgency')?.setValue(urgency)
    this.toggleindicate=true
    this.objIndex = this.ListOfTodoItems.findIndex((obj => obj.description === description));
 
    
  }
  delete_Todo(description:any)
  {
    const index= this.ListOfTodoItems.findIndex((obj => obj.description === description));
    this.ListOfTodoItems.splice(index)
    this.objIndex=-1;
    this.loginForm.get('description')?.setValue('')
    this.loginForm.get('urgency')?.setValue('')
   
  }

}
