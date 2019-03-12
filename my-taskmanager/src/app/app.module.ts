import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AddTask} from  './Add Task/AddTask.component'
import {ViewTask} from  './View Task/ViewTask.component'
import {UpdateTask} from  './Update Task/UpdateTask.component'

@NgModule({
  declarations: [
    AppComponent,
    AddTask,
    ViewTask,
    UpdateTask
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
