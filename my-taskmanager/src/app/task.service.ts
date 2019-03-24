import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  uri = 'http://localhost:4000/task';
  constructor(private http: HttpClient) { }

  addtask(task_name,parent_task_name,start_date,end_date, priority) {
    console.log("Reached service addtask")
    const obj = {
      "task_name": task_name,
      "parent_task_name":parent_task_name,
      "start_date":start_date,
      "end_date":end_date,
      "priority":priority
    };
  console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => 
          console.log('Task Added'+res)
        );
  }

  


  gettasks() {
    return this
           .http
           .get(`${this.uri}/viewTasks`);
  }

  editTask(id) {
    return this
            .http
            .get(`${this.uri}/getTask/${id}`);
    }

    deleteTask(id) {
      return this
              .http
              .get(`${this.uri}/delete/${id}`);
      }

    updateTask(task_name,parent_task_name,start_date,end_date, priority,id) {
      
      const obj = {
        "task_name": task_name,
        "parent_task_name":parent_task_name,
        "start_date":start_date,
        "end_date":end_date,
        "priority":priority
      };
          this
            .http
            .post(`${this.uri}/update/${id}`, obj)
            .subscribe(res => console.log('Done'));
        }



}
