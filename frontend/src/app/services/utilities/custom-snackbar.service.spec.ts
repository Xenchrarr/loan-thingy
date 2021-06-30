import { TestBed } from '@angular/core/testing';

import { CustomSnackbarService } from './custom-snackbar.service';

describe('CustomSnackbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomSnackbarService = TestBed.get(CustomSnackbarService);
    expect(service).toBeTruthy();
  });
});
