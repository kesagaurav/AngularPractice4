import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  constructor(private ts:TodoService) {

  }
todos:any=[];
  ngOnInit(): void {
    this.ts.todoList.subscribe((data)=>{
      this.todos=data;

    })
    this.ts.sendTodos();
    this.ts.s1.subscribe((data:any)=>{
      console.log(data);

    })
  }

}
