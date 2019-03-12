import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  uri = 'http://localhost:4000/task';
  constructor(private http: HttpClient) { }

  addtask(task_name,task_id,parent_task_id,parent_task_name,start_date,end_date, priority) {
    const obj = {
      task_name: task_name,
      task_id:task_id,
      parent_task_name:parent_task_name,
      parent_task_id:parent_task_id,
      start_date:start_date,
      end_date:end_date,
      priority:priority
    };
 // console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Task Added'));
  }
}
