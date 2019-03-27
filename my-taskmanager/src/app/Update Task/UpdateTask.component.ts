import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import Task from '../Task';
import {TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'update-task',
  templateUrl: './UpdateTask.component.html',
  styleUrls: ['./UpdateTask.component.css']
})
export class UpdateTask {
  title = 'Update Task';
  task: any = {};
  allTasks: Task[];
  angForm: FormGroup;
  constructor(private ts: TaskService,private fb: FormBuilder,   private route: ActivatedRoute,private router: Router){this.createForm();}

  createForm() {
    this.angForm = this.fb.group({
      task_name: ['', Validators.required ],
      priority: ['', Validators.required ],
      parent_task_name: [''],
      start_date: ['', Validators.required ],
      end_date: ['', Validators.required ]
      
  
    });
  }

  updateTask(task_name,parent_task_name,start_date,end_date, priority) {
    this.route.params.subscribe(params => {
       this.ts.updateTask(task_name,parent_task_name,start_date,end_date, priority, params['id']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ts.editTask(params['id']).subscribe(res => {
          this.task=res;
      });
    });


      this.ts
      .gettasks()
      .subscribe((data: Task[]) => {
        this.allTasks = data;
      });
    
  }
}
