import { TestBed } from '@angular/core/testing';

import { TimeMethodsService } from './time-methods.service';

describe('TimeMethodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeMethodsService = TestBed.get(TimeMethodsService);
    expect(service).toBeTruthy();
  });
});
