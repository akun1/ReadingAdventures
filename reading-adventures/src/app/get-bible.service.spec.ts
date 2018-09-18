import { TestBed, inject } from '@angular/core/testing';

import { GetBibleService } from './get-bible.service';

describe('GetBibleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetBibleService]
    });
  });

  it('should be created', inject([GetBibleService], (service: GetBibleService) => {
    expect(service).toBeTruthy();
  }));
});
