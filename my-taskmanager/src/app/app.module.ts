import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AddTask} from  './Add Task/AddTask.component'
import {ViewTask} from  './View Task/ViewTask.component'
import {UpdateTask} from  './Update Task/UpdateTask.component'
import { HttpClientModule } from '@angular/common/http';

import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTask,
    ViewTask,
    UpdateTask
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
