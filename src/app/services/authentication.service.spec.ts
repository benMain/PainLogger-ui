import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { AuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';

class FakeAuthService {
  authState: Observable<SocialUser>;
  constructor() {
    this.authState = new Observable<SocialUser>();
  }
}

describe('AuthenticationService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        {
          provide: AuthService,
          useValue: new FakeAuthService(),
        },
      ],
    }),
  );

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
