import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFormComponent } from './log-form.component';

describe('LogFormComponent', () => {
  let component: LogFormComponent;
  let fixture: ComponentFixture<LogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
