import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from './task.service';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { SearchTaskPipe } from './search-task.pipe';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    UpdateTaskComponent,
    AddTaskComponent,
    ViewTaskComponent,
    SearchTaskPipe,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  exports: [
    
        BrowserModule,
        AppRoutingModule,
        SlimLoadingBarModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
       
      ],
  providers: [TaskService, DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
