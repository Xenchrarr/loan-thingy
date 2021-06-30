import { TestBed } from '@angular/core/testing';

import { TextFormattingService } from './text-formatting.service';

describe('TextFormatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextFormattingService = TestBed.get(TextFormattingService);
    expect(service).toBeTruthy();
  });
});
