import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDashComponent } from './shared/components/todo-dash/todo-dash.component';
import { StdDashComponent } from './shared/components/std-dash/std-dash.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
  {
    path: 'todo',
    component: TodoDashComponent,
  },
  {
    path: 'students',
    component: StdDashComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
