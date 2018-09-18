import { TestBed, inject } from '@angular/core/testing';

import { SimpleAuthGuardService } from './simple-auth-guard.service';

describe('SimpleAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleAuthGuardService]
    });
  });

  it('should be created', inject([SimpleAuthGuardService], (service: SimpleAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
