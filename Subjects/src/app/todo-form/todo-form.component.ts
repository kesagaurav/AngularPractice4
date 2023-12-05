import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  constructor(private ts:TodoService) {

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }



  addTodos(t:string){
    this.ts.addNewTodo(t);
  }
}
