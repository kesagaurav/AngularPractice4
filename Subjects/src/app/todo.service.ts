import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos=[
    'task1',
    'task2',
    'task3'
  ]
  constructor() {
    this.sendTodos();
    this.todoList.next('hello todos');
    this.s1.next('hello behavior second data')

  }

  todoList=new Subject();
  s1=new BehaviorSubject("behavior subject data");



  sendTodos(){
    this.todoList.next(this.todos);

  }

  addNewTodo(t:any){
    this.todos.push(t);
    this.sendTodos();
  }


}
