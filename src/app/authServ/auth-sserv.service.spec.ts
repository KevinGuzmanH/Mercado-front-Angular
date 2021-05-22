import { TestBed } from '@angular/core/testing';

import { AuthSservService } from './auth-sserv.service';

describe('AuthSservService', () => {
  let service: AuthSservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
