import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './update-task.component';

import { By } from '@angular/platform-browser';
//import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Directive } from '@angular/core';
import { TaskService } from "../task.service";

// @Directive({
//   selector: '[routerLink], [routerLinkActive]'
// })
// class DummyRouterLinkDirective {}

describe('UpdateTaskComponent', () => {
  let component: UpdateTaskComponent;
  let fixture: ComponentFixture<UpdateTaskComponent>;
  //let httpMock: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTaskComponent],// DummyRouterLinkDirective],
      imports: [
        CommonModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
   
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it(`should have as title 'Update Task'`, () => {  
    expect(component.title).toEqual('Update Task');
  });

  it('Task Name cannot be empty', () => {  
    component.ValidateTaskName("");
    expect(component.tasknameErr).toBeTruthy();
  });
});
