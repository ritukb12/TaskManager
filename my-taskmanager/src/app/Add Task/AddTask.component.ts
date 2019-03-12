import { Component } from '@angular/core';
import {TaskService } from '../task.service';
@Component({
  selector: 'add-task',
  templateUrl: './AddTask.component.html',
  styleUrls: ['./AddTask.component.css']
})
export class AddTask {
  title = 'Add Task';
constructor(private bs: TaskService){}

  addtask(task_name,task_id,parent_task_id,parent_task_name,start_date,end_date, priority) {
    this.bs.addtask(task_name,task_id,parent_task_id,parent_task_name,start_date,end_date, priority);
  }
  ngOnInit() {
  }
}
