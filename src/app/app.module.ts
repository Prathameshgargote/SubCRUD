import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StdFormComponent } from './shared/components/std-form/std-form.component';
import { StdTableComponent } from './shared/components/std-table/std-table.component';
import { StdDashComponent } from './shared/components/std-dash/std-dash.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { TodoDashComponent } from './shared/components/todo-dash/todo-dash.component';
import { NabarComponent } from './shared/components/nabar/nabar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/matrail/matrail.module';
import { GetconfirmComponent } from './shared/components/getconfirm/getconfirm.component';

@NgModule({
  declarations: [
    AppComponent,
    StdFormComponent,
    StdTableComponent,
    StdDashComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoDashComponent,
    NabarComponent,
    GetconfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
