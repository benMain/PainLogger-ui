import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPage } from './user.page';
import { AuthenticationService } from '../services';

describe('UserPage', () => {
  let component: UserPage;
  let fixture: ComponentFixture<UserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: AuthenticationService,
          useValue: {
            isLoggedIn: () => false,
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
