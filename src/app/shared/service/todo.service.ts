import { Injectable } from '@angular/core';
import { Itodo } from '../model/todo';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoArr: Itodo[] = localStorage.getItem('todoArr')
    ? JSON.parse(localStorage.getItem('todoArr')!)
    : [];

  EditTodoSub$: Subject<Itodo> = new Subject();
  constructor() {}

  addTodo(todo: Itodo) {
    this.todoArr.push(todo);
    localStorage.setItem('todoArr', JSON.stringify(this.todoArr));
  }

  fetchAlltodo() {
    return this.todoArr;
  }

  updatetodo(updateObj: Itodo) {
    let getindex = this.todoArr.findIndex((u) => u.todoId === updateObj.todoId);
    this.todoArr[getindex] = updateObj;
    localStorage.setItem('todoArr', JSON.stringify(this.todoArr));
  }

  Removetodo(remTodo: Itodo) {
    let getindex = this.todoArr.findIndex((u) => u.todoId === remTodo.todoId);
    this.todoArr.splice(getindex, 1);
    localStorage.setItem('todoArr', JSON.stringify(this.todoArr));
  }
}
