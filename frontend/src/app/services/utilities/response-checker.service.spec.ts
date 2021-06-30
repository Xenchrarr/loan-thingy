import { TestBed } from '@angular/core/testing';

import { ResponseCheckerService } from './response-checker.service';

describe('ResponseCheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponseCheckerService = TestBed.get(ResponseCheckerService);
    expect(service).toBeTruthy();
  });
});
