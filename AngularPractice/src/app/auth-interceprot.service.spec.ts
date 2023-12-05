import { TestBed } from '@angular/core/testing';

import { AuthInterceprotService } from './auth-interceprot.service';

describe('AuthInterceprotService', () => {
  let service: AuthInterceprotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInterceprotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
