import { TestBed, inject } from '@angular/core/testing';

import { PassBookInfoService } from './pass-book-info.service';

describe('PassBookInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassBookInfoService]
    });
  });

  it('should be created', inject([PassBookInfoService], (service: PassBookInfoService) => {
    expect(service).toBeTruthy();
  }));
});
