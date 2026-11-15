import { Component, OnInit } from '@angular/core';
import {Itodo} from "src/app/model/todo"
import { ViewChild, ElementRef } from '@angular/core';

import { UuidService } from '../services/uuid.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
@ViewChild('todoName') todoName!: ElementRef;
todosArr: Array<Itodo>=[
  {
    todoItem:"HTML",
    todoId:"123"
  },

  {
    todoItem:"JS",
    todoId:"124"
  },

  {
    todoItem:"React",
    todoId:"125"
  }
]

isInEditMode:boolean=false

constructor(
  private _uuidService: UuidService
){ }

ngOnInit():void{
  
}
onAddTodo(): void{
  let obj: Itodo = {
    todoItem:
    this.todoName.nativeElement.value,
    todoId:this._uuidService.getuuid()
  };
  this.todosArr.push(obj);
  this._uuidService.snackbar("Todo Added Successfully");
  this.todoName.nativeElement.value='';
}
}
