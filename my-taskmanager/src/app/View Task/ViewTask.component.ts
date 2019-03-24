import { Component } from '@angular/core';
import Task from '../Task';
import { TaskService } from '../task.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'view-task',
  templateUrl: './ViewTask.component.html',
  styleUrls: ['./ViewTask.component.css']
})
export class ViewTask {
  tasks: Task[];
  title = 'View Task';
  angForm: FormGroup;
  constructor(private ts: TaskService, private fb: FormBuilder, private route: ActivatedRoute,private router: Router) { this.createForm(); }

  createForm() {
     this.angForm = this.fb.group({
      task_name: [''],
      parent_task_name: [''],
      priorityfrom: [''],
      priorityto: [''],     
      startdate: ['' ],
      enddate: ['']   
  
     });
  }

  
  deleteTask(task_id) {
          this.ts.deleteTask(task_id).subscribe(res => {
            console.log('Deleted');
            this.ts
            .gettasks()
            .subscribe((data: Task[]) => {
              this.tasks = data;
            });
          });
   }
  
  ngOnInit() {
    this.ts
      .gettasks()
      .subscribe((data: Task[]) => {
        this.tasks = data;
      });
  }
}
