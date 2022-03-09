import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  form = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
