import { TestBed } from '@angular/core/testing';

import { ApiPersistenceService } from './api-persistence.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { SocialUser } from 'angularx-social-login';

describe('ApiPersistenceService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        ApiPersistenceService,
        {
          provide: HttpClient,
          useValue: {
            post: (url: string, body: any, options: any) => null,
          },
        },
        {
          provide: AuthenticationService,
          useValue: {
            getUser: () => new SocialUser(),
          },
        },
      ],
    }),
  );

  it('should be created', () => {
    const service: ApiPersistenceService = TestBed.get(ApiPersistenceService);
    expect(service).toBeTruthy();
  });
});
