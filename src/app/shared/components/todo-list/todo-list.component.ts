import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../model/todo';
import { TodoService } from '../../service/todo.service';
import { UuidService } from '../../service/uuid.service';
import { SnackbarService } from '../../service/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoArr!: Itodo[];
  constructor(
    private _todoservice: TodoService,
    private _uuid: UuidService,
    private _snackbar: SnackbarService,
    private _matdailog: MatDialog
  ) {}

  ngOnInit(): void {
    this.todoArr = this._todoservice.fetchAlltodo();
  }

  oneditO(todo: Itodo) {
    this._todoservice.EditTodoSub$.next(todo);
  }

  onremove(todo: Itodo) {
    let matdailogref = this._matdailog.open(GetconfirmComponent, {
      width: '500px',
      disableClose: true,
      data: 'Are You sure ! You want to delete this Todo',
    });

    matdailogref.afterClosed().subscribe((res) => {
      if (res) {
        this._todoservice.Removetodo(todo);
        this._snackbar.opensnackbar(
          `the ${todo.todoItem} is Deleted Successfully !`
        );
      }
    });
  }
}
