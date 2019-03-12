import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddTask} from './Add Task/AddTask.component'
import {ViewTask} from './View Task/ViewTask.component'
import {UpdateTask} from './Update Task/UpdateTask.component'

const routes: Routes = [
  {path:"AddTask", component:AddTask},
{path:"ViewTask", component:ViewTask},
{path:"UpdateTask/:id", component:UpdateTask},
{ path: '', redirectTo: '/', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
