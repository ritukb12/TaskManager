import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';


import { AddTask } from './AddTask.component';

describe('Add Task Component', () => {
  let component: AddTask;
  let fixture: ComponentFixture<AddTask>;
  let submitEl: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTask],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,      
        HttpClientModule,
           ],
      providers: [
        {
          provide: Router,
          useClass: class {
            public navigate = jasmine.createSpy('navigate');
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTask);
    component = fixture.componentInstance;   
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit method success', () => {
    expect(component.angForm).toBeDefined();
  });

  it('should add a task correctly', () => {
    component.angForm.controls.task_name.setValue('abc testing');
    component.angForm.controls.parent_task_name.setValue('');
    const spy = spyOn(component, 'addtask').and.stub();
    component.addtask('abc jasmine','',5,'11-11-2019','11-11-2019');
    expect(spy).toHaveBeenCalledWith('abc jasmine','',5,'11-11-2019','11-11-2019');
    //expect(component.angForm.valid).toBeTruthy();
  });

});
