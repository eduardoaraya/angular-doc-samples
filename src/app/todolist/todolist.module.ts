import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TodolistComponent } from './pages/todolist/todolist.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListComponent, TaskFormComponent, TodolistComponent],
  exports: [ListComponent, TaskFormComponent, TodolistComponent],
  imports: [CommonModule, SharedModule],
})
export class TodolistModule {}
