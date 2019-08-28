import { TestBed } from '@angular/core/testing';

import { ApiPersistenceService } from './api-persistence.service';

describe('ApiPersistenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPersistenceService = TestBed.get(ApiPersistenceService);
    expect(service).toBeTruthy();
  });
});
