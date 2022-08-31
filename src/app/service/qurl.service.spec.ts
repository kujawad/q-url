import { TestBed } from '@angular/core/testing';

import { QurlService } from './qurl.service';

describe('QurlService', () => {
  let service: QurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
