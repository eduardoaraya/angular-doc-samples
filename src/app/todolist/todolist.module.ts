import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './component/list/list.component';
import { TaskFormComponent } from './component/task-form/task-form.component';
import { IndexComponent } from './pages/index/index.component';
import { IndexTodolistComponent } from './pages/index-todolist/index-todolist.component';
import { TodolistIndexComponent } from './pages/todolist-index/todolist-index.component';
import { TodolistComponent } from './pages/todolist/todolist.component';



@NgModule({
  declarations: [
    ListComponent,
    TaskFormComponent,
    IndexComponent,
    IndexTodolistComponent,
    TodolistIndexComponent,
    TodolistComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodolistModule { }
