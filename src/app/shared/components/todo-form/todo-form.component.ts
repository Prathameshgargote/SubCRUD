import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Itodo } from '../../model/todo';
import { TodoService } from '../../service/todo.service';
import { UuidService } from '../../service/uuid.service';
import { SnackbarService } from '../../service/snackbar.service';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  todoform!: FormGroup;
  Iseditmode: boolean = false;
  Edittodo!: Itodo;
  constructor(
    private _todoservice: TodoService,
    private _uuid: UuidService,
    private _snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.createtodoform();
    this.patchtodo();
  }

  createtodoform() {
    this.todoform = new FormGroup({
      todoItem: new FormControl(null, Validators.required),
    });
  }

  patchtodo() {
    this._todoservice.EditTodoSub$.subscribe((res) => {
      this.Iseditmode = true;
      this.Edittodo = res;
      this.todoform.patchValue(res);
    });
  }

  OnSubmit() {
    if (this.todoform.valid && this.Iseditmode) {
      let UpdateObj: Itodo = {
        ...this.todoform.value,
        todoId: this.Edittodo.todoId,
      };
      this._todoservice.updatetodo(UpdateObj);
      this.Iseditmode = false;
      this._snackbar.opensnackbar(
        `the ${UpdateObj.todoItem} is Updated successfully!`
      );
      this.todoform.reset()
    } else {
      let newtodo: Itodo = {
        ...this.todoform.value,
        todoId: this._uuid.generateUuid(),
      };
      this._todoservice.addTodo(newtodo);
      this.todoform.reset();
      this._snackbar.opensnackbar(
        `the ${newtodo.todoItem} is Added successfully!`
      );
    }
  }

  get f(){
    return this.todoform.controls
  }
}
