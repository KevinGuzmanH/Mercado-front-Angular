import { TestBed } from '@angular/core/testing';

import { ServTknService } from './serv-tkn.service';

describe('ServTknService', () => {
  let service: ServTknService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServTknService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
