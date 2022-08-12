import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MongoDataComponent } from './mongo-data/mongo-data.component';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    TodoComponent,
    MongoDataComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
    
  ],
  exports:[
    TodoComponent
  ]
})
export class TodoMongoModule { }
