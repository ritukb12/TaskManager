import { Component } from '@angular/core';
import {TaskService } from '../task.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import Task from '../Task';

@Component({
  selector: 'add-task',
  templateUrl: './AddTask.component.html',
  styleUrls: ['./AddTask.component.css']
})
export class AddTask {
  tasks: Task[];
  angForm: FormGroup;
  title = 'Add Task';
constructor(private ts: TaskService,private fb: FormBuilder){this.createForm();}
createForm() {
  this.angForm = this.fb.group({
    task_name: ['', Validators.required ],
    priority: ['', Validators.required ],
    parent_task_name: [''],
    start_date: ['', Validators.required ],
    end_date: ['', Validators.required ]
    

  });
}
  addtask(task_name,parent_task_name,start_date,end_date, priority) {
    console.log("Reached component.ts addtask");
    this.ts.addtask(task_name,parent_task_name,start_date,end_date, priority);
    window.confirm("Task Added Sucessfully!!");
  }

  
  ngOnInit() {
    this.ts
    .gettasks()
    .subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }
}
