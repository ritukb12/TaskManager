import { Component } from '@angular/core';
import Task from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'view-task',
  templateUrl: './ViewTask.component.html',
  styleUrls: ['./ViewTask.component.css']
})
export class ViewTask{
  tasks: Task[];
  title = 'View Task';

  constructor(private ts: TaskService){}

  ngOnInit() {
    this.ts
      .gettasks()
      .subscribe((data: Task[]) => {
        this.tasks = data;
    });
  }
}
