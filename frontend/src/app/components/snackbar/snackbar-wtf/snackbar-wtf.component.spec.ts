import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarWtfComponent } from './snackbar-wtf.component';

describe('SnackbarWtfComponent', () => {
  let component: SnackbarWtfComponent;
  let fixture: ComponentFixture<SnackbarWtfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackbarWtfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarWtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
