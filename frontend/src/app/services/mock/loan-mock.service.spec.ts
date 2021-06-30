import { TestBed } from '@angular/core/testing';

import { LoanMockService } from './loan-mock.service';

describe('LoanMockService', () => {
  let service: LoanMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
