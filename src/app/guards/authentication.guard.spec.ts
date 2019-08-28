import { TestBed, async, inject } from '@angular/core/testing';

import { AuthenticationGuard } from './authentication.guard';
import { AuthenticationService } from '../services';
import { Router } from '@angular/router';

describe('AuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationGuard,
        {
          provide: AuthenticationService,
          useValue: {
            isLoggedIn: () => true,
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: (commands: string[]) => null,
          },
        },
      ],
    });
  });

  it('should ...', inject(
    [AuthenticationGuard],
    (guard: AuthenticationGuard) => {
      expect(guard).toBeTruthy();
    },
  ));
});
