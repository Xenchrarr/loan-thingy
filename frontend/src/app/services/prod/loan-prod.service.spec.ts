import { TestBed } from '@angular/core/testing';

import { LoanProdService } from './loan-prod.service';

describe('LoanProdService', () => {
  let service: LoanProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
