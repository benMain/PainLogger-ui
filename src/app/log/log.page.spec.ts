import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogPage } from './log.page';
import { ApiPersistenceService } from '../services';
import { LogEntry } from '../models';

describe('LogPage', () => {
  let component: LogPage;
  let fixture: ComponentFixture<LogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: ApiPersistenceService,
          useValue: {
            saveLogEntry: (entry: LogEntry) => null,
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
